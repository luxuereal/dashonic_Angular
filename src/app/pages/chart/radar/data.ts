import { ChartOptions } from "./radar.model";

/**
 * Basic Radar Chart
 */
const basicRadarChart: ChartOptions = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {
            show: false
        }
    },
    stroke: {
        colors: ['#038edc']
    },
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
};

/**
 * Radar Chart - Multiple series
 */
const multipleSeriesChart: ChartOptions = {
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    },
    {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }
    ],
    chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
            enabled: true, blur: 1, left: 1, top: 1
        },
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.2
    },
    markers: {
        size: 0
    },
    colors: ['#038edc', '#5FD0F5', '#51d28c'],
    xaxis: {
        categories: ['2014', '2015', '2016', '2017', '2018', '2019']
    }
};


/**
 * Radar Chart - Polygon Fill
 */
const polygonFillChart: ChartOptions = {
    series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 140,

        }
    },
    title: {
        text: 'Radar with Polygon Fill',
        style: {
            fontWeight: 500,
        },
    },
    colors: ['#5FD0F5'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val: any) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yaxis: {
        tickAmount: 7
    }
};

export { basicRadarChart, multipleSeriesChart, polygonFillChart }