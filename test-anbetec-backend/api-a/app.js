const express = require('express');
const bodyParser = require('body-parser'); // Required for parsing request body data (usually JSON)
const cors = require('cors');
const retornaUsuariosPorIdEmpresaPorSegundo = require('./utils/cron');

const usuarioController = require('./controllers/Usuarios.controller');
const usuarioRoutes = require('./routes/Usuarios.routes'); // Assuming routes.js defines the routes

const app = express();


// Middleware
app.use(cors()); // Enable CORS if needed
app.use(bodyParser.json()); 

app.use('/', usuarioRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {

    console.log(`Server listening on port ${port}`);
    });

retornaUsuariosPorIdEmpresaPorSegundo();
