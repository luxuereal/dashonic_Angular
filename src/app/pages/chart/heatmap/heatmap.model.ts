import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexChart,
    ApexXAxis,
    ApexGrid,
    ApexPlotOptions,
    ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    dataLabels?: ApexDataLabels;
    title?: ApexTitleSubtitle;
    colors?: any;
    fill?: any;
    xaxis?: ApexXAxis;
    grid?: ApexGrid;
    plotOptions?: ApexPlotOptions;
    stroke?: ApexStroke;
};