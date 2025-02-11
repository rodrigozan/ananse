import { Request, Response } from 'express';
import { Types } from 'mongoose';

import IUser from '../interfaces/IUser';

import { UserService, userServiceInstance } from '../services/UserService';

import { BaseController } from './BaseController';

import handleError from '../utils/errors.utils';



class UserController extends BaseController<IUser> {
    private userService: UserService;

    constructor(service: UserService) {
        super(service);
        this.userService = service;
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.userService.create(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async createMultiple(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.createMultiple(req.body);
            return res.status(201).json(users);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async findUserById(req: Request, res: Response): Promise<Response> {
        try {
            const id = this.validateId(req, res);
            if (!id) return res; 

            const user = await this.userService.findUserById(new Types.ObjectId(id), '');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { name, email, phone, active, role } = req.body
            const body = { name, email, phone, active, role }

            const id = this.validateId(req, res);
            if (!id) return res;
            const user = await this.userService.update(id, body)
            if (!user) {
                return res.status(404).send();
            }
            return res.status(200).send(user);
        } catch (error) {
            return handleError(res, error);
        }
    }
}

export default new UserController(userServiceInstance);