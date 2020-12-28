export interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    google_id: string;
    facebook_id: string;
    role: string;
    is_activated: boolean;
}

export interface FacebookProfile {
    id: string;
    username?: string;
    displayName? :string;
    name: {
        familyName: string;
        givenName: string;
        middleName?: string;
    }
    gender?: string;
    profileUrl? :string;
    emails: [
        {
            value?: string;
        }
    ];
    provider: string;
    _raw: object;
    _json: object;
}

export interface GoogleProfile {
    id: string;
    displayName? :string;
    name: {
        familyName: string;
        givenName: string;
    }
    gender?: string;
    profileUrl? :string;
    emails: [
        {
            value?: string;
            verified?: boolean;
        }
    ];
    photos: [
        {
            value?: string;
        }
    ];
    provider: string;
    _raw: object;
    _json: object;
}

export interface CreateUserSchema {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password?: string;
    google_id?: string;
    facebook_id?: string;
    role?: string;
    is_activated?: boolean;
}

export interface UpdateUserDetailsSchema {
    first_name: string;
    last_name: string;
    email: string;
    password?: string;
    google_id?: string;
    facebook_id?: string;
    role?: string;
    is_activated?: boolean;
}

export interface UpdateUserPasswordSchema {
    password: string;
}
