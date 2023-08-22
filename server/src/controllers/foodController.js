const Food = require('../models/Food');

// Sign up controller
exports.postNewFood = (req, res) => {
	const { name, description, foodType, isVegetarian, price } = req.body;
	const authUserId = req.authUserId;
	Food.create({
		name,
		description,
		foodType,
		isVegetarian,
		price,
		postedBy: authUserId,
	})
		.then((result) => {
			return res
				.status(201)
				.json({ message: 'Your food has been posted successfully' });
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to post your food. Please retry',
				errorDetail: err.message,
			});
		});
};

exports.getMyListedFoods = (req, res) => {
	const foodType = req.params.foodType;
	const authUserId = req.authUserId;

	Food.find({
		foodType: foodType,
		postedBy: authUserId,
	})
		.then((result) => {
			return res.status(201).json({ result });
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to fetch your listing. Please retry',
				errorDetail: err.message,
			});
		});
};
exports.getFoodsList = (req, res) => {
	const foodType = req.params.foodType;
	const authUserId = req.authUserId;

	Food.find({
		foodType: foodType,
		postedBy: { $ne: authUserId },
	})
		.populate({ path: 'postedBy', select: ['username', 'fullname', 'email'] })
		.then((result) => {
			return res.status(201).json({ result });
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to fetch listing. Please retry',
				errorDetail: err.message,
			});
		});
};
exports.getFoodDetailById = (req, res) => {
	const foodId = req.params.id;
	const authUserId = req.authUserId;

	Food.findById(foodId)
		.populate({ path: 'postedBy', select: ['username', 'fullname', 'email'] })
		.then((result) => {
			if (!result) {
				return res
					.status(404)
					.json({ message: 'Could not found any food with provided ID' });
			}

			// Check if it is user self posted
			let isSelfPost = false;
			if (
				authUserId &&
				result.postedBy &&
				result.postedBy._id.toString() === authUserId
			) {
				isSelfPost = true;
			}

			const modifiedFood = { ...result._doc, isSelfPost };

			return res.status(201).json({ result: modifiedFood });
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to fetch the food. Please retry',
				errorDetail: err.message,
			});
		});
};
