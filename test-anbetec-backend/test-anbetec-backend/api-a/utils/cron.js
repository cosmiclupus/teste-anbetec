const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();


// Substitua '2' pelo idempresa que você deseja usar
const id = '2';

const apiBUrl = `http://localhost:3000/empresas/2/usuarios`;

let counter = 0;

const token = 'eyJhbGciOiJIUzI1NiJ9.e30.vuiuB9ZaJE_K3VjGRNOjHYKUsvgr9bOa9vjgAUD3Z-Y';


function retornaUsuariosPorIdEmpresaPorSegundo(){
    cron.schedule('*/10 * * * * *', async () => {
        try {
            const response = await axios.get(apiBUrl, {
                headers: {
                    'Authorization': ` Bearer ${token}`,
                    'Cache-Control': 'no-cache'
                }
            });
    
            const usuarios = response.data;
    
            console.log(`Usuários da empresa 2:`, usuarios);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    });
}

module.exports = retornaUsuariosPorIdEmpresaPorSegundo;