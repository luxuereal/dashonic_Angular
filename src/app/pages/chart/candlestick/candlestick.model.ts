import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexTitleSubtitle,
    ApexPlotOptions,
    ApexDataLabels,
    ApexStroke,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    yaxis?: ApexYAxis;
    title?: ApexTitleSubtitle;
    plotOptions?: ApexPlotOptions;
    dataLabels?: ApexDataLabels;
    stroke?: ApexStroke;
    tooltip?: ApexTooltip;
};