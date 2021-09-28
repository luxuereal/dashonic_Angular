import { ChartOptions } from "./pie.model";

/**
 * Simple Pie Chart
 */
const simplePieChart: ChartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
        height: 300,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
        position: 'bottom'
    },
    dataLabels: {
        dropShadow: {
            enabled: false,
        }
    },
    colors: ["#038edc", "#51d28c", "#f7cc53", "#f34e4e", "#564ab1"]
};

/**
 * Simple Donut Chart
 */
const simpleDonutChart: ChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: 'donut',
    },
    legend: {
        position: 'bottom'
    },
    dataLabels: {
        dropShadow: {
            enabled: false,
        }
    },
    colors: ["#038edc", "#51d28c", "#f7cc53", "#f34e4e", "#564ab1"]
};

/**
 * Monochrome Pie Chart
 */
const monochromePieChart: ChartOptions = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
        height: 300,
        type: 'pie',
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    theme: {
        monochrome: {
            enabled: true,
            color: '#038edc',
            shadeTo: 'light',
            shadeIntensity: 0.6
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -5
            }
        }
    },
    title: {
        text: "Monochrome Pie",
        style: {
            fontWeight: 500,
        },
    },
    legend: {
        show: false
    }
};

/**
 * Gradient Donut Chart
 */
const gradientDonutChart: ChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    title: {
        text: 'Gradient Donut with custom Start-angle',
        style: {
            fontWeight: 500,
        },
    },
    legend: {
        position: 'bottom'
    },
    colors: ["#038edc", "#51d28c", "#f7cc53", "#f34e4e", "#564ab1"]
};

/**
 * Patterned Donut Chart
 */
const patternedDonutChart: ChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {

            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    },
    theme: {
        palette: 'palette2'
    },
    title: {
        text: "Favourite Movie Type",
        style: {
            fontWeight: 500,
        },
    },
    legend: {
        position: 'bottom'
    },
    colors: ["#038edc", "#51d28c", "#f7cc53", "#f34e4e", "#564ab1"]
};

/**
 * Semi Donut Chart
 */
const semiDonutChart: ChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
        width: 380,
        type: "donut"
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    },
    grid: {
        padding: {
            bottom: -80
        }
    },
    legend: {
        position: 'bottom'
    },
};

/**
* Pie Chart with Image Fill
*/
const pieWithImageChart: ChartOptions = {
    series: [44, 33, 54, 45],
    chart: {
        height: 300,
        type: 'pie',
    },
    colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
            src: ['../../assets/images/auth-bg.jpg', '../../assets/images/profile-bg.jpg', '../../assets/images/small/img-5.jpg', '../../assets/images/small/img-2.jpg'],
            width: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#111']
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
        }
    },
    legend: {
        position: 'bottom'
    }
};


export { simplePieChart, simpleDonutChart, monochromePieChart, gradientDonutChart, patternedDonutChart, semiDonutChart, pieWithImageChart }