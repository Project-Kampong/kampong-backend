import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getSignedJwtToken = (user) =>
    jwt.sign({ id: user.user_id, email: user.email, created_on: user.created_on }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const checkPassword = async (inputPassword, originalPassword) => await bcrypt.compare(inputPassword, originalPassword);
