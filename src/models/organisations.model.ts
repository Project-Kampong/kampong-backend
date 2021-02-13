export interface Organisation {
    organisation_id: string;
    name: string;
    organisation_type: string;
    about: string;
    website_url: string;
    phone: string;
    email: string;
    owned_by: string;
    locations: string[];
    story: string;
    is_verified: boolean;
    created_on: Date;
    deleted_on: Date;
}

export interface CreateOrganisationSchema {
    organisation_id: string;
    name: string;
    organisation_type?: string;
    about: string;
    website_url?: string;
    phone?: string;
    email: string;
    address: string;
    owned_by: string;
    locations: string[];
    story: string;
    facebook_link: string;
    twitter_link: string;
    instagram_link: string;
    banner_photo: string;
    profile_photo: string;
    additional_photos: string[];
}

export interface UpdateOrganisationSchema {
    name?: string;
    organisation_type?: string;
    about?: string;
    website_url?: string;
    phone?: string;
    email?: string;
    address?: string;
    locations?: string[];
    story?: string;
    facebook_link?: string;
    twitter_link?: string;
    instagram_link?: string;
    banner_photo?: string;
    profile_photo?: string;
    additional_photos?: string[];
}
