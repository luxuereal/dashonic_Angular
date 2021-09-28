import { ChartOptions } from "./bubble.model";

/**
 * Series data
 */
function generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

/**
 * Simple Bubble Chart
 */
const simpleBubbleChart: ChartOptions = {
    series: [{
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble2',
        data: generateData(new Date('12 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble3',
        data: generateData(new Date('13 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble4',
        data: generateData(new Date('14 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        height: 350,
        type: 'bubble',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 0.8
    },
    title: {
        text: 'Simple Bubble Chart',
        style: {
            fontWeight: 500,
        },
    },
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    },
    colors: ["#038edc", "#5fd0f3", "#f7cc53", "#51d28c"]
}

/**
 * 3D Bubble Chart
 */
const BubbleChart: ChartOptions = {
    series: [{
        name: 'Product1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        height: 350,
        type: 'bubble',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    title: {
        text: '3D Bubble Chart',
        style: {
            fontWeight: 500,
        },
    },
    xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    theme: {
        palette: 'palette2'
    },
    colors: ["#564ab1", "#5fd0f3", "#51d28c", "#f7cc53"]
};

export { simpleBubbleChart, BubbleChart }