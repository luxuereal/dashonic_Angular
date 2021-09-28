/**
 * Todo List
 */
export interface Task {
    id: string;
    title: string;
    date: string;
    content: string;
    users: Array<{
        name?: string;
        profile?: string;
    }>;
    status: string;
    variant?: string;
}
