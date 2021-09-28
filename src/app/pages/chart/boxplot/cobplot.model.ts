import {
    ChartComponent,
    ApexChart,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexAxisChartSeries,
    ApexXAxis,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    title?: ApexTitleSubtitle;
    plotOptions?: ApexPlotOptions;
    xaxis?: ApexXAxis,
    tooltip?: ApexTooltip,
    colors?: string[]
};