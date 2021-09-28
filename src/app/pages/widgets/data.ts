import { ChartType } from './widgets.model';

/**
 * Total Revenue Chart
 */
const revenueChart: ChartType = {
    series: [{
        data: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110]
    }],
    chart: {
        type: 'bar',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        }
    },
    colors: ['#038edc'],
};

/**
 * TOTAL REFUNDS Chart
 */
const refundsChart: ChartType = {
    series: [{
        name: "Series A",
        data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40]
    }],
    chart: {
        height: 50,
        type: 'area',
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [50, 100, 100, 100]
        },
    },
    colors: ['#038edc', 'transparent'],
};

/**
 * Active User Chart
 */
const userChart: ChartType = {
    series: [{
        data: [40, 20, 30, 40, 20, 60, 55, 70, 95, 65, 110]
    }],
    chart: {
        type: 'bar',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
    },
    colors: ['#038edc'],
};

/**
 * All Time Orders Chart
 */
const orderChart: ChartType = {
    series: [{
        name: "Series A",
        data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40]
    }],
    chart: {
        height: 50,
        type: 'area',
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [50, 100, 100, 100]
        },
    },
    colors: ['#038edc', 'transparent'],
};

/**
 * Visitors Chart
 */
const visitorsChart: ChartType = {
    series: [{
        name: "New Visitors", data: [21, 65, 32, 80, 42, 25]
    }
    ],
    chart: {
        height: 52,
        type: 'area',
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth', width: 2
    },
    colors: ['#038edc'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};

/**
 * User Chart
 */
const usersChart: ChartType = {
    series: [{
        name: "Source A", data: [40, 30, 51, 33, 63, 50]
    }
    ],
    chart: {
        height: 52,
        type: 'area',
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth', width: 2
    },
    colors: ['#038edc'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};

/**
 * Sessions Chart
 */
const sessionsChart: ChartType = {
    series: [{
        name: "Source A", data: [21, 55, 32, 80, 42, 25]
    }
    ],
    chart: {
        height: 52,
        type: 'area',
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth', width: 2
    },
    colors: ['#038edc'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};

/**
 * Donut chart
 */
const donutChart: ChartType = {
    chart: {
        height: 245,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
            },
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [44, 25, 19],
    labels: ["Social", "Direct", "Others"],
    colors: ['#038edc', '#f5f6f8', '#5fd0f3'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0
    }
};

/**
 * Donut chart
 */
const earningDonutChart: ChartType = {
    chart: {
        height: 130,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },
    series: [44, 25, 19],
    labels: ["Revenue", "Expenses", "Profit"],
    colors: ['#038edc', '#dfe2e6', '#5fd0f3'],
    legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0
    }
};

/**
 * Chat List
 */
const inboxData = [
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Jennie Sherlock',
        message: `Hey! there I'm available`,
        time: '02 min',
        color: 'online'
    },
    {
        name: 'Stacie Dube',
        message: `I've finished it! See you so`,
        time: '10 min',
        color: 'success'
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Katie Olson',
        message: 'This theme is awesome!',
        time: '22 min',
        color: 'away'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Marshall Wilson',
        message: 'Nice to meet you',
        time: '1 Hr',
        color: ''
    },
    {
        name: 'James Lee',
        message: `Wow that's great`,
        time: '04 Hr',
        color: 'online'
    },
    {
        image: 'assets/images/users/avatar-5.jpg',
        name: 'Ronald Tucker',
        message: 'Nice to meet you',
        time: '22/04',
        color: 'online'
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Katie Olson',
        message: 'This theme is awesome!',
        time: '22 min',
        color: 'online'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Marshall Wilson',
        message: 'Nice to meet you',
        time: '01 Hr',
        color: ''
    },
];

/**
 * Chat Message List
 */
const chatMessagesData = [
    {
        name: 'Daniel Pickering',
        message: 'Good morning !',
        time: '10:00',
        profile: 'assets/images/users/avatar-2.jpg'
    },
    {
        align: 'right',
        name: 'Daniel Pickering',
        message: 'Good morning',
        time: '10:02',
        profile: 'assets/images/users/avatar-1.jpg'
    },
    {
        name: 'Daniel Pickering',
        message: 'Hello!',
        time: '10:04',
        profile: 'assets/images/users/avatar-2.jpg'
    },
    {
        name: 'Daniel Pickering',
        message: 'What about our next meeting?',
        time: '10:04',
        profile: 'assets/images/users/avatar-2.jpg'
    },
    {
        name: 'Daniel Pickering',
        message: 'Next meeting tomorrow 10.00AM',
        time: '10:06',
        profile: 'assets/images/users/avatar-4.jpg'
    },
    {
        align: 'right',
        name: 'Daniel Pickering',
        message: `Wow that's great`,
        time: '10:06',
        profile: 'assets/images/users/avatar-1.jpg'
    },
    {
        name: 'Daniel Pickering',
        message: 'img-1.jpg & img-2.jpg images for a New Projects',
        time: '10:06',
        profile: 'assets/images/users/avatar-4.jpg',
        image: 'assets/images/small/img-1.jpg'
    },
];



export { revenueChart, refundsChart, userChart, orderChart, visitorsChart, usersChart, sessionsChart, donutChart, earningDonutChart, inboxData, chatMessagesData };
