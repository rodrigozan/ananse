import { Document } from 'mongoose';
export default interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
}