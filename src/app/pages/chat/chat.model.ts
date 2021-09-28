/**
 * Chat User List
 */
export interface ChatUser {
    image?: string;
    name: string;
    message: string;
    time: string;
    status: string;
}

/**
 * Chat Message List
 */
export interface ChatMessage {
    align?: string;
    name?: any;
    message: string;
    time: string;
    profile?: string;
    image?: string[];
}
