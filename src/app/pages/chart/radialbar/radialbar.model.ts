import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ApexResponsive,
    ApexFill,
    ApexStroke,
    ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexNonAxisChartSeries;
    chart?: ApexChart;
    labels?: string[];
    plotOptions?: ApexPlotOptions;
    colors?: string[];
    legend?: ApexLegend;
    responsive?: ApexResponsive | ApexResponsive[];
    fill?: ApexFill;
    stroke?: ApexStroke;
    grid?: ApexGrid;
};