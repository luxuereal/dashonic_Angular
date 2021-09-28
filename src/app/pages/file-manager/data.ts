import { ChartType } from './file-manager.model';
/**
 * Storage Chart
 */
 const storageChart: ChartType = {
    series: [76],
    chart: {
        height: 150,
        type: 'radialBar',
        sparkline: {
            enabled: true
        }
    },
    colors: ['#038edc'],
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels

            },

            hollow: {
                size: '60%',
            },

            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -2,
                    fontSize: '16px'
                }
            }
        }
    },
    grid: {
        padding: {
            top: -10
        }
    },
    labels: ['Storage'],
};

/**
 * Completed List
 */
const recent = [
    {
        icon: 'fas fa-file-alt text-primary',
        name: 'Index.html',
        date: '12-10-2020, 09:45',
        size: '09 KB'
    },
    {
        icon: 'fas fa-file-archive text-warning',
        name: 'Project-A.zip',
        date: '11-10-2020, 17:05',
        size: '115 KB'
    },
    {
        icon: 'fas fa-image text-muted',
        name: 'Img-1.jpeg',
        date: '11-10-2020, 13:26',
        size: '86 KB'
    },
    {
        icon: 'fas fa-file-alt text-muted',
        name: 'Update list.txt',
        date: '10-10-2020, 11:32',
        size: '08 KB'
    },
    {
        icon: 'fas fa-folder text-warning',
        name: 'Project B',
        date: '10-10-2020, 10:51',
        size: '72 KB'
    },
    {
        icon: 'fas fa-file-alt text-muted',
        name: 'Changes list.txt',
        date: '09-10-2020, 17:05',
        size: '07 KB'
    },
    {
        icon: 'fas fa-image text-success',
        name: 'Img-2.png',
        date: '09-10-2020, 15:12',
        size: '31 KB'
    },
    {
        icon: 'fas fa-folder text-warning',
        name: 'Project C',
        date: '09-10-2020, 10:11',
        size: '20 KB'
    },
    {
        icon: 'fas fa-file-alt text-primary',
        name: 'Starter-page.html',
        date: '08-10-2020, 03:22',
        size: '11 KB'
    }
];

export { storageChart, recent };