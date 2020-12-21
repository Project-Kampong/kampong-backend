import { BaseRepository } from './base.repository';
import { User, CreateUserSchema, UpdateUserDetailsSchema, UpdateUserPasswordSchema } from '../models/users.model';

export class UsersRepository extends BaseRepository {
    getUserByEmail(email: string): Promise<User> {
        return this.db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', email);
    }

    createUser(createUserData: CreateUserSchema): Promise<User> {
        return this.db.one('INSERT INTO loginuser (${this:name}) VALUES (${this:csv}) RETURNING *', createUserData);
    }

    updateUserDetailsById(updateUserDetailsData: UpdateUserDetailsSchema, userId: string): Promise<User> {
        const updateUserDetailsQuery =
            this.pgp.helpers.update(updateUserDetailsData, null, 'loginuser') + this.pgp.as.format(' WHERE user_id = $1 RETURNING *', userId);

        return this.db.one(updateUserDetailsQuery);
    }

    updateUserPasswordById(updateUserPasswordData: UpdateUserPasswordSchema, userId: string): Promise<User> {
        const updatePasswordQuery =
            this.pgp.helpers.update(updateUserPasswordData, null, 'loginuser') + this.pgp.as.format(' WHERE user_id = $1 RETURNING *', userId);

        return this.db.one(updatePasswordQuery);
    }

    deleteUserById(userId: string): Promise<User> {
        return this.db.one('DELETE FROM loginuser WHERE user_id = $1 RETURNING *', userId);
    }
}
