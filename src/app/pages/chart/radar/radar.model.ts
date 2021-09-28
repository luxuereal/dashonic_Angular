import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexXAxis,
    ChartComponent,
    ApexFill,
    ApexDataLabels,
    ApexStroke,
    ApexPlotOptions,
    ApexYAxis,
    ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    title?: ApexTitleSubtitle;
    xaxis?: ApexXAxis;
    stroke?: ApexStroke;
    dataLabels?: ApexDataLabels;
    tooltip?: any;
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    colors?: string[];
    yaxis?: ApexYAxis;
    markers?: ApexMarkers;
};