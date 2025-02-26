import { Router } from 'express';

import { authenticate } from './index';
import serieController from '../controllers/SerieController';

const router = Router();

/**
 * @openapi
 * /api/series:
 *   post:
 *     summary: Cria uma nova série
 *     tags:
 *       - Series
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Serie'
 *     responses:
 *       201:
 *         description: Série criada com sucesso
 *       400:
 *         description: Erro na criação da série
 */
router.post('/series', authenticate, serieController.create.bind(serieController));

/**
 * @openapi
 * /api/series:
 *   get:
 *     summary: Obtém a lista de todas as séries
 *     tags:
 *       - Series
 *     responses:
 *       200:
 *         description: Lista de séries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Serie'
 */
router.get('/series', authenticate, serieController.get.bind(serieController));

/**
 * @openapi
 * /api/series/{id}:
 *   get:
 *     summary: Obtém uma série pelo ID
 *     tags:
 *       - Series
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados da série
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Serie'
 *       404:
 *         description: Série não encontrada
 */
router.get('/series/:id', authenticate, serieController.getById.bind(serieController));

/**
 * @openapi
 * /api/series/{id}:
 *   put:
 *     summary: Atualiza uma série pelo ID
 *     tags:
 *       - Series
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
 *             $ref: '#/components/schemas/Serie'
 *     responses:
 *       200:
 *         description: Série atualizada com sucesso
 *       400:
 *         description: Erro na atualização da série
 *       404:
 *         description: Série não encontrada
 *     security:
 *       - bearerAuth: []
 */
router.put('/series/:id', authenticate, serieController.update.bind(serieController));

/**
 * @openapi
 * /api/series/{id}:
 *   delete:
 *     summary: Deleta uma série pelo ID
 *     tags:
 *       - Series
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Série deletada com sucesso
 *       404:
 *         description: Série não encontrada
 *     security:
 *       - bearerAuth: []
 */
router.delete('/series/:id', authenticate, serieController.delete.bind(serieController));

export default router;
