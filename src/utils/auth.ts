import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const getSignedJwtToken = (user: { user_id: string; email: string; created_on: Date }): string =>
    sign({ id: user.user_id, email: user.email, created_on: user.created_on }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const checkPassword = async (inputPassword: string, originalPassword: string): Promise<boolean> =>
    await bcrypt.compare(inputPassword, originalPassword);
