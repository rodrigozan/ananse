import { Router } from 'express';
import { authenticate } from './index';
import worldController from '../controllers/WorldController';

const router = Router();

/**
 * @openapi
 * /api/worlds:
 *   post:
 *     summary: Cria um novo mundo
 *     tags:
 *       - Worlds
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/World'
 *     responses:
 *       201:
 *         description: Mundo criado com sucesso
 *       400:
 *         description: Erro na criação do mundo
 */
router.post('/worlds', authenticate, worldController.create.bind(worldController));

/**
 * @openapi
 * /api/worlds:
 *   get:
 *     summary: Obtém a lista de todos os mundos
 *     tags:
 *       - Worlds
 *     responses:
 *       200:
 *         description: Lista de mundos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/World'
 */
router.get('/worlds', authenticate, worldController.get.bind(worldController));

/**
 * @openapi
 * /api/worlds/{id}:
 *   get:
 *     summary: Obtém um mundo pelo ID
 *     tags:
 *       - Worlds
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do mundo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/World'
 *       404:
 *         description: Mundo não encontrado
 */
router.get('/worlds/:id', authenticate, worldController.getById.bind(worldController));

/**
 * @openapi
 * /api/worlds/{id}:
 *   put:
 *     summary: Atualiza um mundo pelo ID
 *     tags:
 *       - Worlds
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
 *             $ref: '#/components/schemas/World'
 *     responses:
 *       200:
 *         description: Mundo atualizado com sucesso
 *       400:
 *         description: Erro na atualização do mundo
 *       404:
 *         description: Mundo não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.put('/worlds/:id', authenticate, worldController.update.bind(worldController));

/**
 * @openapi
 * /api/worlds/{id}:
 *   delete:
 *     summary: Deleta um mundo pelo ID
 *     tags:
 *       - Worlds
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mundo deletado com sucesso
 *       404:
 *         description: Mundo não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/worlds/:id', authenticate, worldController.delete.bind(worldController));

export default router;
