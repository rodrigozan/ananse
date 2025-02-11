import { Request, Response } from 'express';
import { Document } from 'mongoose';

import { BaseService } from '../services/BaseService';

import handleError from '../utils/errors.utils';


export class BaseController<T extends Document> {
    private service: BaseService<T>;

    constructor(service: BaseService<T>) {
        this.service = service;
    }

    protected validateId(req: Request, res: Response): string | null {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'ID is required' });
            return null;
        }
        return id;
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const item = await this.service.create(req.body);
            return res.status(201).json(item);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async get(_req: Request, res: Response): Promise<Response> {
        try {
            const items = await this.service.get();
            return res.status(200).json(items);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const id = this.validateId(req, res);
            if (!id) return res;

            const item = await this.service.getById(id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            return res.status(200).json(item);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = this.validateId(req, res);
            if (!id) return res;

            const item = await this.service.update(id, req.body);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            return res.status(200).json(item);
        } catch (error) {
            return handleError(res, error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = this.validateId(req, res);
            if (!id) return res;

            const item = await this.service.delete(id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            return res.status(200).json({ message: 'Item deleted successfully' });
        } catch (error) {
            return handleError(res, error);
        }
    }
}