/**
 * Task Model
 */
export interface taskModel {
    id: string;
    title: string;
    users: Array<{
        name?: string;
        profile?: string;
        variant?: string;
    }>;
    date: string;
    status: string;
    bg_color: string;
}

/**
 * Team Model
 */
export interface teamModel {
    id: number;
    image?: string;
    name: string;
    email?: string;
    designation: string;
}

/**
 * Message Model
 */
export interface messageModel {
    profile?: string;
    name: string;
    content?: string;
    date: string;
    image?: Array<{
        name?: string;
        icon?: string;
        size?: string;
    }>;
}

/**
 * Attachments Model
 */
export interface attachmentsModel {
    name?: string;
    icon?: string;
    size?: string;
}
