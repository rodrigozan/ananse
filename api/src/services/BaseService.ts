import { Model, Document } from 'mongoose';

export class BaseService<T extends Document> {
    protected model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    public async create(data: Partial<T>): Promise<T> {
        const item = new this.model(data);
        return await item.save();
    }

    public async get(): Promise<T[]> {
        return await this.model.find().exec();
    }

    public async getById(id: string): Promise<T | null> {
        return await this.model.findById(id).exec();
    }

    public async update(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    public async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}