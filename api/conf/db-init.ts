import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.MONGODB_DATABASE;
const MONGO_URI = 'mongodb://localhost:27017'; // Altere conforme necessário

async function initializeDatabase(): Promise<void> {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        const db: Db = client.db(DB_NAME);

        // Verifica se o banco de dados já existe
        const databasesList = await client.db().admin().listDatabases();
        const dbExists = databasesList.databases.some((dbInfo) => dbInfo.name === DB_NAME);

        if (!dbExists) {
            console.log(`Banco de dados ${DB_NAME} não encontrado. Criando...`);

            // Cria as coleções necessárias
            await db.createCollection('users');
            await db.createCollection('books');
            await db.createCollection('series');
            await db.createCollection('worlds');
            await db.createCollection('characters');
            await db.createCollection('scenes');

            console.log(`Banco de dados ${DB_NAME} e coleções criados com sucesso.`);
        } else {
            console.log(`Banco de dados ${DB_NAME} já existe.`);
        }
    } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
    } finally {
        await client.close();
    }
}

export default initializeDatabase();