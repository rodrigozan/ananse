import dotenv from 'dotenv';

import initializeDatabase from './database/db-init';

import { startServer } from './conf/express';

dotenv.config();


async function main() {
    try {
        await initializeDatabase();
        console.log('Banco de dados inicializado com sucesso.');

        const port = process.env.PORT || 3000;
        await startServer(port);
        console.log(`Servidor rodando na porta ${port}.`);
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
        process.exit(1); // Encerra o processo com erro
    }
}

main();