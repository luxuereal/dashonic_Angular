import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexDataLabels,
    ApexGrid,
    ApexFill,
    ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexAxisChartSeries | any;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    yaxis?: ApexYAxis;
    colors?: string[];
    dataLabels?: ApexDataLabels;
    grid?: ApexGrid;
    fill?: ApexFill;
    legend?: any; //ApexLegend;
    markers?: ApexMarkers;
};