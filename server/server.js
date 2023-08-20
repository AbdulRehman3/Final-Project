const express = require('express');
const cors = require('cors'); // Import the cors module
const app = express();
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();
const PORT = process.env.PORT || 8000;

// Initialize the DB connection
require('./src/configs/dbClient');

const apiRoutes = require('./src/routes/routes');

// Allow all origins (for development; restrict in production)
app.use(cors());

app.use(express.json());

// Import the API Routes - this includes all the API paths
app.use('/api', apiRoutes);

app.listen(PORT, () => {
	console.log(`server listenning on port ${PORT}`);
});
