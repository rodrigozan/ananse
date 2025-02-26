import { Router } from 'express';

import { authenticate } from './index';
import bookController from '../controllers/BookController';

const router = Router();

/**
 * @openapi
 * /api/books:
 *   post:
 *     summary: Cria um novo livro
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Erro na criação do livro
 */
router.post('/books', authenticate, bookController.create.bind(bookController));

/**
 * @openapi
 * /api/books:
 *   get:
 *     summary: Obtém a lista de todos os livros
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/books', bookController.get.bind(bookController));

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *     summary: Obtém um livro pelo ID
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do livro
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Livro não encontrado
 */
router.get('/books/:id', bookController.getById.bind(bookController));

/**
 * @openapi
 * /api/books/{id}:
 *   put:
 *     summary: Atualiza um livro pelo ID
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       400:
 *         description: Erro na atualização do livro
 *       404:
 *         description: Livro não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.put('/books/:id', authenticate, bookController.update.bind(bookController));

/**
 * @openapi
 * /api/books/{id}:
 *   delete:
 *     summary: Deleta um livro pelo ID
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/books/:id', authenticate, bookController.delete.bind(bookController));

export default router;
