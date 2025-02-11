import { Schema, model, Document, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

import IUser from 'src/interfaces/IUser';

const UserSchema = new Schema<IUser>({
    _id: { type: Types.ObjectId, auto: true }, // Garante que _id seja gerado corretamente
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