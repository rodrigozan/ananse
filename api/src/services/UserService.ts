import bcrypt from 'bcryptjs'
import { Types } from 'mongoose';

import { UserModel } from '../models/UserModel'
export class UserService {

    public async create(data: any) {
        try {

            const hashedPassword = await bcrypt.hash(data.password, 8)
            const user = new UserModel({
                ...data,
                password: hashedPassword,
            })
            return await user.save()
        }
        catch (error){
            console.log('Error in service: ',error.message)
            return
        }
   
    }

    public async find() {
        try {
            return await UserModel.find()
        } catch (error){
            console.log('Error in service: ',error.message)
            return
        }
        
    }

    public async findUserById(id: Types.ObjectId, data: string) {
        try {
            return await UserModel.findById(id, data)
        } catch (error){
            console.log('Error in service: ',error.message)
            return
        }
        
    }

    public async update(id: Types.ObjectId, data: any) {
        try {
            return await UserModel.findByIdAndUpdate(id, data, { new: true })
        } catch (error){
            console.log('Error in service: ',error.message)
            return
        }
        
    }

    public async delete(id: Types.ObjectId) {
        try {
            return await UserModel.findByIdAndDelete(id)
        } catch (error){
            console.log('Error in service: ',error.message)
            return
        }
    }
    
}

export const userServiceInstance = new UserService();

