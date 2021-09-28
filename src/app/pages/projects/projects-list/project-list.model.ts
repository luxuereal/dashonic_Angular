/**
 * Project Grid
 */
export interface projectsList {
    department: string;
    title: string;
    content: string;
    category: string;
    users: Array<{
        name?: string;
        profile?: string;
        variant?: string;
    }>;
    date: string;
    status: string;
    bg_color: string;
}