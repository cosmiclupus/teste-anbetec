const express = require('express');
const bodyParser = require('body-parser'); // Required for parsing request body data (usually JSON)
const cors = require('cors'); // Optional for enabling CORS

// Import the controller and routes
const empresaController = require('./controllers/Empresas.controllers');
const empresaRoutes = require('./routes/Empresas.routes'); // Assuming routes.js defines the routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); // Parse incoming JSON data

app.use('/', empresaRoutes); 

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});