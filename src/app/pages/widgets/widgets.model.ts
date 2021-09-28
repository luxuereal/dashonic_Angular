// Chart data
export interface ChartType {
    chart?: any;
    plotOptions?: any;
    colors?: any;
    series?: any;
    fill?: any;
    dataLabels?: any;
    legend?: any;
    xaxis?: any;
    stroke?: any;
    labels?: any;
    markers?: any;
    yaxis?: any;
    tooltip?: any;
    grid?: any;
    title?: any;
    responsive?: any;
}

/**
 * Chat User List
 */
export interface inboxModel {
    image?: string;
    name: string;
    message: string;
    time: string;
    color: string;
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
    image?: string;
}