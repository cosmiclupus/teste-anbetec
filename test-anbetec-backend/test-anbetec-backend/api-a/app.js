const express = require('express');
const bodyParser = require('body-parser'); // Required for parsing request body data (usually JSON)
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const retornaUsuariosPorIdEmpresaPorSegundo = require('./utils/cron');

const usuarioController = require('./controllers/Usuarios.controller');
const usuarioRoutes = require('./routes/Usuarios.routes'); // Assuming routes.js defines the routes
 
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API A (Usuários)',
      description: 'Descrição da API A',
      contact: {
        name: 'Developer'
      },
      servers: ['http://localhost:3001']
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', usuarioRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {

    console.log(`Server listening on port ${port}`);
    });

retornaUsuariosPorIdEmpresaPorSegundo();
