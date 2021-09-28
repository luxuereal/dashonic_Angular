export interface Email {
    id: number;
    title: string;
    subject: string;
    date: string;
    unread?: boolean;
    btn?: string;
    bg_color?: string;
}
