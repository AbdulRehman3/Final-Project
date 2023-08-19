const express = require ("express");
const cors = require('cors'); // Import the cors module
const app = express()
const PORT = 8000;
const { API_PORT } = process.env;
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const port = process.env.PORT || API_PORT;
app.use(cors()); // Allow all origins (for development; restrict in production)
app.use(express.json ());
app.use(require("./routes"));







app.listen(PORT, ()=> {
console.log(`server listenning on port ${PORT}`);
})