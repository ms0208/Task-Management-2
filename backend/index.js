const express = require('express');
const app = express();
const cors = require('cors');
const dbconnection = require('./config/db.js'); // Ensure the correct path
require('dotenv').config();
const PORT = process.env.PORT || 5000; // Default port if not set in .env
const routers = require('./routers/userouters.js');

app.use(cors());
app.use(express.json());

// Connect to Database
dbconnection();

// API route
app.get('/', (req, res) => {
    res.send("API is working");
});
//API 
app.use('/api/',routers);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
