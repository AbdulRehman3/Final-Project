const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Sign up controller
exports.signup = (req, res) => {
	const { username, fullname, email, password } = req.body;

	// Generate the hash for password and save it instead of the raw passsword
	bcrypt.hash(password, 10, (err, hashedPassword) => {
		// If hashing fails, terminate and return eror
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		const newUser = new User({
			username,
			fullname,
			email,
			password: hashedPassword,
		});

		newUser
			.save()
			.then((result) => {
				res.status(201).json({ message: 'User registered successfully.' });
			})
			.catch((err) => {
				return res.status(500).json({
					error: 'There was an error with your request, please retry',
					detail: err.message,
				});
			});
	});
};

// Sign in controller
exports.signin = (req, res) => {
	const { username, password } = req.body;

	User.findOne({ username })
		.then((user) => {
			if (!user) {
				// For security reason, don't expose that the user isn't found
				return res
					.status(401)
					.json({ error: 'The provided username or password is incorrect!' });
			}
			bcrypt.compare(password, user.password, (err, isPasswordValid) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}

				if (!isPasswordValid) {
					return res.status(401).json({
						error: 'The provided username or password is incorrect!',
					});
				}
				const token = jwt.sign(
					{ userId: user._id },
					process.env.JWT_SECRET_KEY
				);
				// Remove the password from user data
				const userData = {
					id: user._id,
					fullname: user.fullname,
					username: user.username,
					email: user.email,
				};
				res.json({ token, user: userData });
			});
		})
		.catch((err) => {
			return res.status(500).json({ error: err.message });
		});
};
