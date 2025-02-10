import { config } from 'dotenv';

import initializeDatabase from '../conf/db-init';

import { startServer } from '../conf/express';

async function main() {
    try {
        // Inicializa o banco de dados
        await initializeDatabase();
        console.log('Banco de dados inicializado com sucesso.');

        // Inicia o servidor Express
        const port = process.env.PORT || 3000;
        await startServer(port);
        console.log(`Servidor rodando na porta ${port}.`);
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
        process.exit(1); // Encerra o processo com erro
    }
}

main();