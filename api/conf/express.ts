import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export function startServer(port: number | string): Promise<void> {
    return new Promise((resolve) => {
        const app: Express = express();

        // Middlewares
        app.use(cors()); // Habilita CORS
        app.use(express.json()); // Habilita o parsing de JSON
        app.use(morgan('dev')); // Logs das requisições

        // Rota de teste
        app.get('/', (_req: Request, res: Response) => {
            res.status(200).json({ message: 'Bem-vindo à plataforma Ananse!' });
        });

        // Inicia o servidor
        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
            resolve();
        });
    });
}