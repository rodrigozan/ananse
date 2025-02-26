import { Router } from 'express';

import { authenticate } from './index';
import scenarioController from '../controllers/ScenarioController';

const router = Router();

/**
 * @openapi
 * /api/scenarios:
 *   post:
 *     summary: Cria um novo cenário
 *     tags:
 *       - Scenarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Scenario'
 *     responses:
 *       201:
 *         description: Cenário criado com sucesso
 *       400:
 *         description: Erro na criação do cenário
 */
router.post('/scenarios', authenticate, scenarioController.create.bind(scenarioController));

/**
 * @openapi
 * /api/scenarios:
 *   get:
 *     summary: Obtém a lista de todos os cenários
 *     tags:
 *       - Scenarios
 *     responses:
 *       200:
 *         description: Lista de cenários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Scenario'
 */
router.get('/scenarios', authenticate, scenarioController.get.bind(scenarioController));

/**
 * @openapi
 * /api/scenarios/{id}:
 *   get:
 *     summary: Obtém um cenário pelo ID
 *     tags:
 *       - Scenarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do cenário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Scenario'
 *       404:
 *         description: Cenário não encontrado
 */
router.get('/scenarios/:id', authenticate, scenarioController.getById.bind(scenarioController));

/**
 * @openapi
 * /api/scenarios/{id}:
 *   put:
 *     summary: Atualiza um cenário pelo ID
 *     tags:
 *       - Scenarios
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
 *             $ref: '#/components/schemas/Scenario'
 *     responses:
 *       200:
 *         description: Cenário atualizado com sucesso
 *       400:
 *         description: Erro na atualização do cenário
 *       404:
 *         description: Cenário não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.put('/scenarios/:id', authenticate, scenarioController.update.bind(scenarioController));

/**
 * @openapi
 * /api/scenarios/{id}:
 *   delete:
 *     summary: Deleta um cenário pelo ID
 *     tags:
 *       - Scenarios
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cenário deletado com sucesso
 *       404:
 *         description: Cenário não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/scenarios/:id', authenticate, scenarioController.delete.bind(scenarioController));

export default router;
