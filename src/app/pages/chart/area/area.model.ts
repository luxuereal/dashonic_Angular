import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexLegend,
    ApexTooltip,
    ApexMarkers,
    ApexFill,
    ApexAnnotations,
    ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
    labels?: string[];
    legend?: ApexLegend;
    subtitle?: ApexTitleSubtitle;
    series?: ApexAxisChartSeries | any;
    chart?: ApexChart;
    dataLabels?: ApexDataLabels;
    markers?: ApexMarkers;
    title?: ApexTitleSubtitle;
    fill?: ApexFill;
    yaxis?: ApexYAxis;
    xaxis?: ApexXAxis;
    tooltip?: ApexTooltip;
    stroke?: ApexStroke;
    annotations?: ApexAnnotations;
    colors?: any;
    toolbar?: any;
    grid?: ApexGrid;
};