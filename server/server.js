const express = require('express');
const cors = require('cors'); // Import the cors module
const app = express();
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8000;

// Load environment variables from .env
dotenv.config();

// Initialize the DB connection
require('./src/configs/dbClient');

// Allow all origins (for development; restrict in production)
app.use(cors());

app.use(express.json());

// Import the API Routes - This includes the API paths
app.use(require('./src/routes/routes'));

app.listen(PORT, () => {
	console.log(`server listenning on port ${PORT}`);
});
