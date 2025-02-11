import bcrypt from 'bcryptjs';
import { Types } from 'mongoose';
import { BaseService } from './BaseService';
import IUser from 'src/interfaces/IUser';
import { UserModel } from '../models/UserModel';

export class UserService extends BaseService<IUser> {
    constructor() {
        super(UserModel);
    }

    public async create(data: Partial<IUser>): Promise<IUser> {
        try {
            if (!data.password) {
                throw new Error('Password is required');
            }
            const hashedPassword = await bcrypt.hash(data.password, 8);
            const user = new this.model({
                ...data,
                password: hashedPassword,
            });
            return await user.save();
        } catch (error) {
            console.log('Error in service: ', error.message);
            throw error;
        }
    }

    public async createMultiple(users: Partial<IUser>[]): Promise<(IUser & { _id: Types.ObjectId })[]> {
        try {
            const hashedUsers = await Promise.all(users.map(async (user) => {
                if (!user.password) {
                    throw new Error('Password is required for all users');
                }
                const hashedPassword = await bcrypt.hash(user.password, 8);
                return {
                    ...user,
                    password: hashedPassword,
                };
            }));
    
            // Inserção em massa com lean() para evitar problemas de tipagem
            const createdUsers = await this.model.insertMany(hashedUsers, { rawResult: false });
            return createdUsers.map(user => user.toObject()) as (IUser & { _id: Types.ObjectId })[];
    
        } catch (error) {
            console.error('Error in service: ', error.message);
            throw error;
        }
    }

    public async findUserById(id: Types.ObjectId, data: string): Promise<IUser | null> {
        try {
            return await this.model.findById(id, data).exec();
        } catch (error) {
            console.log('Error in service: ', error.message);
            throw error;
        }
    }

    static async update(id: Types.ObjectId, data: any): Promise<IUser | null> {
        try {
            return await UserModel.findByIdAndUpdate(id, data, { new: true }).exec();
        } catch (error){
            return error.message
        }        
    }
}

export const userServiceInstance = new UserService();