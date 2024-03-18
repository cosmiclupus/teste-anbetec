const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const empresaController = require('./controllers/Empresas.controllers');
const empresaRoutes = require('./routes/Empresas.routes'); 

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


app.use(cors());
app.use(bodyParser.json()); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', empresaRoutes); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});