import { ChartType } from './analytics.model';

/**
 * Area charts
 */
const areaChart: ChartType = {
    series: [
        {
            name: 'Total Visit',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 54]
        }
    ],
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 440,
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 4,
            opacity: 0.075
        },
        zoom: {
            autoScaleYaxis: true
        },
        toolbar: {
            show: false,
        }
    },

    dataLabels: {
        enabled: false
    },
    markers: {
        size: 3,
        strokeWidth: 3,

        hover: {
            size: 6,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3,
        dashArray: 0,
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
    },
    yaxis: {
        labels: {
            show: false,
        }
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: false,
            }
        }
    },
    colors: ["#038edc"],
    fill: {
        opacity: 0.05,
        colors: ["#038edc"],
        type: 'solid',
    },
};

/**
 * Column chart
 */
const columnChart: ChartType = {
    series: [{
        name: 'Previous Month',
        data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4]
    }, {
        name: 'This Month',
        data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4]
    }],
    chart: {
        type: 'bar',
        height: 200,
        stacked: true,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '23%',
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        markers: {
            width: 8,
            height: 8,
            radius: 30,
        }
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ['#c0e3f6', '#038edc'],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            formatter: function (value: string) {
                return value + "k";
            }
        },
        tickAmount: 2,
        min: 0,
        max: 70
    },
    grid: {
        strokeDashArray: 10
    },
    fill: {
        opacity: 1
    }
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
const userChart: ChartType = {
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
 * Traffic Source
 */
const trafficData = [
    {
        id: '#1',
        link: 'www.abc.com',
        price: `3.82 k`,
        percentage: '1.2 %'
    },
    {
        id: '#2',
        link: 'www.xyz.com',
        price: `3.04 k`,
        percentage: '1.1 %'
    },
    {
        id: '#3',
        link: 'www.abc123.com',
        price: `2.64 k`,
        percentage: '1.1 %'
    },
    {
        id: '#4',
        link: 'www.xyz.com',
        price: `2.06 k`,
        percentage: '0.5 %'
    },
];

const channels = [
    {
        sources: "Social",
        sessions: '648',
        users: '432',
        rate: '27.38%'
    },
    {
        sources: "Direct",
        sessions: '524',
        users: '385',
        rate: '35.16%'
    },
    {
        sources: "Email",
        sessions: '432',
        users: '390',
        rate: '30.20%'
    },
    {
        sources: "Referral",
        sessions: '521',
        users: '423',
        rate: '29.05%'
    },
    {
        sources: "Others",
        sessions: '602',
        users: '553',
        rate: '33.14%'
    }
];

export { areaChart, columnChart, visitorsChart, userChart, sessionsChart, donutChart, trafficData, channels };
