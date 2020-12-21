export interface User {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string
    is_activated: boolean
};

export interface CreateUserSchema {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role?: string
    is_activated?: boolean
};

export interface UpdateUserSchema {
    first_name: string,
    last_name: string,
    email: string,
    password?: string,
    role?: string
    is_activated?: boolean
};
