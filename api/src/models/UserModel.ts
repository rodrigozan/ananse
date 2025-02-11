import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

import IUser from 'src/interfaces/IUser';

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.checkPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};


export const UserModel = model<IUser & Document>('User', UserSchema);