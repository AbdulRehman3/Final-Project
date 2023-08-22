const Order = require('../models/Order');
const Food = require('../models/Food');

// Sign up controller
exports.createOrder = (req, res) => {
	const { fullname, email, food, total, address1, address2 } = req.body;
	const authUserId = req.authUserId;
	Order.create({
		total,
		fullname,
		email,
		address1,
		address2,
		food,
		orderedBy: authUserId,
	})
		.then((result) => {
			// Get ordrId to send back in result
			const orderId = result._id;

			// Update the Food document to make food Unavilable
			Food.updateOne({ _id: food }, { isAvailable: false })
				.then((updateResult) => {
					// Send Email Confirmation

					return res.status(201).json({
						message: 'Your order has been placed successfully',
						orderId: orderId,
					});
				})
				.catch((foodUpdateErr) => {
					// If food update fails, then remove the order document and return error
					// "Fire and Forget" operation
					Order.deleteOne({ _id: orderId }).then().catch();

					return res.status(500).json({
						error: 'Failed to place your order, please retry.',
						errorDetail: foodUpdateErr.message,
					});
				});
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to place your order, please retry.',
				errorDetail: err.message,
			});
		});
};

exports.getOrderDetailById = (req, res) => {
	const orderId = req.params.id;

	Order.findById(orderId)
		.populate({
			path: 'food',
			select: ['name', 'description', 'foodType', 'isVegetarian'],
		})
		.then((result) => {
			if (!result) {
				return res
					.status(404)
					.json({ message: 'Could not found any order with provided ID' });
			}

			return res.status(201).json({ result });
		})
		.catch((err) => {
			return res.status(500).json({
				error: 'Failed to fetch the order, please retry',
				errorDetail: err.message,
			});
		});
};
