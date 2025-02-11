import { Router } from 'express';
import characterController from '../controllers/CharacterController';

const router = Router();

/**
 * @openapi
 * /api/characters:
 *   post:
 *     summary: Cria um novo personagem
 *     tags:
 *       - Characters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Character'
 *     responses:
 *       201:
 *         description: Personagem criado com sucesso
 *       400:
 *         description: Erro na criação do personagem
 */
router.post('/characters', characterController.create.bind(characterController));

/**
 * @openapi
 * /api/characters:
 *   get:
 *     summary: Obtém a lista de todos os personagens
 *     tags:
 *       - Characters
 *     responses:
 *       200:
 *         description: Lista de personagens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Character'
 */
router.get('/characters', characterController.get.bind(characterController));

/**
 * @openapi
 * /api/characters/{id}:
 *   get:
 *     summary: Obtém um personagem pelo ID
 *     tags:
 *       - Characters
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do personagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: Personagem não encontrado
 */
router.get('/characters/:id', characterController.get.bind(characterController));

/**
 * @openapi
 * /api/characters/{id}:
 *   put:
 *     summary: Atualiza um personagem pelo ID
 *     tags:
 *       - Characters
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
 *             $ref: '#/components/schemas/Character'
 *     responses:
 *       200:
 *         description: Personagem atualizado com sucesso
 *       400:
 *         description: Erro na atualização do personagem
 *       404:
 *         description: Personagem não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.put('/characters/:id', characterController.update.bind(characterController));

/**
 * @openapi
 * /api/characters/{id}:
 *   delete:
 *     summary: Deleta um personagem pelo ID
 *     tags:
 *       - Characters
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Personagem deletado com sucesso
 *       404:
 *         description: Personagem não encontrado
 *     security:
 *       - bearerAuth: []
 */
router.delete('/characters/:id', characterController.delete.bind(characterController));

export default router;
