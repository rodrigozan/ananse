import { Router } from 'express';

import { authenticate } from './index';
import eventController from '../controllers/EventController';

const router = Router();

/**
 * @openapi
 * /api/events:
 *   post:
 *     summary: Cria um novo evento
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *       400:
 *         description: Erro na criação do evento
 */
router.post('/events', authenticate, eventController.create.bind(eventController));

/**
 * @openapi
 * /api/events:
 *   get:
 *     summary: Obtém a lista de todos os eventos
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get('/events', authenticate, eventController.get.bind(eventController));

/**
 * @openapi
 * /api/events/{id}:
 *   get:
 *     summary: Obtém um evento pelo ID
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do evento
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Evento não encontrado
 */
router.get('/events/:id', authenticate, eventController.getById.bind(eventController));

/**
 * @openapi
 * /api/events/{id}:
 *   put:
 *     summary: Atualiza um evento pelo ID
 *     tags:
 *       - Events
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
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Evento atualizado com sucesso
 *       400:
 *         description: Erro na atualização do evento
 *       404:
 *         description: Evento não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.put('/events/:id', authenticate, eventController.update.bind(eventController));

/**
 * @openapi
 * /api/events/{id}:
 *   delete:
 *     summary: Deleta um evento pelo ID
 *     tags:
 *       - Events
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Evento deletado com sucesso
 *       404:
 *         description: Evento não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/events/:id', authenticate, eventController.delete.bind(eventController));

export default router;
