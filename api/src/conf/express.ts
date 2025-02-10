import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { Connection } from '../database/Connection';
import router from '../router';

dotenv.config();

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.connection();
        this.routes();
    }

    private middleware() {
        this.server.use(cors()); // Habilita CORS
        this.server.use(express.json()); // Habilita o parsing de JSON
        this.server.use(morgan('dev')); // Logs das requisições
    }

    private routes() {
        this.server.use(router);
        // Rota de teste
        this.server.get('/', (_req: express.Request, res: express.Response) => {
            res.status(200).json({ message: 'Bem-vindo à plataforma Ananse!' });
        });
    }

    private async connection() {
        await Connection.connect();
    }
}

export function startServer(port: number | string): Promise<void> {
    return new Promise((resolve) => {
        const app = new App().server;

        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
            resolve();
        });
    });
}