const express = require('express');
const bodyParser = require('body-parser'); // Required for parsing request body data (usually JSON)
const cors = require('cors'); // Optional for enabling CORS
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Import the controller and routes
const empresaController = require('./controllers/Empresas.controllers');
const empresaRoutes = require('./routes/Empresas.routes'); // Assuming routes.js defines the routes

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API B (Empresas)',
      description: 'Descrição da API B',
      contact: {
        name: 'Developer'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); // Parse incoming JSON data
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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