/* eslint-disable no-undef */
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require( './routes/tripRoutes');
const despesasRoutes = require( './routes/despesasRoutes');
const registroComprasRoutes = require( './routes/registroComprasRoutes');
const errorHandler = require( './middlewares/authenticateJWT');
const cors = require('cors');
const sequelize = require('./database/database');
const app = express();
const CadastroAdmin = require('./models/cadastrarAdmin');

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

sequelize.sync()
  .then(async () => {
    console.log('Tabelas do banco de dados foram sincronizadas com sucesso.');
    })

        .catch((error) => {
    console.error('Erro ao sincronizar tabelas do banco de dados:', error);
});

app.use(express.json({force : true}));
app.use(cors(corsOptions)); 

app.use( userRoutes);
app.use( tripRoutes);
app.use( despesasRoutes);
app.use( registroComprasRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
