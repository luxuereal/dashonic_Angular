/**
 * Project Grid
 */
export interface projectsGrid {
    type: string;
    title: string;
    content: string;
    category: string;
    users: Array<{
        name?: string;
        profile?: string;
        variant?: string;
    }>;
}