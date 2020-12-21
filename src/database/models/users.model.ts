export interface User {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string | null,
    googleId: string | null,
    facebookId: string | null,
    role: string
    is_activated: boolean
};

export interface CreateUserSchema {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string | null,
    googleId: string | null,
    facebookId: string | null,
    role?: string
    is_activated?: boolean
};

export interface UpdateUserDetailsSchema {
    first_name: string,
    last_name: string,
    email: string,
    password?: string | null,
    googleId?: string | null,
    facebookId?: string | null,
    role?: string
    is_activated?: boolean
};

export interface UpdateUserPasswordSchema {
    password: string
}