import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexNonAxisChartSeries;
    chart?: ApexChart;
    responsive?: ApexResponsive[];
    labels?: any;
    theme?: ApexTheme;
    title?: ApexTitleSubtitle;
    fill?: ApexFill,
    yaxis?: ApexYAxis,
    stroke?: ApexStroke,
    legend?: ApexLegend,
    plotOptions?: ApexPlotOptions
    colors?: string[];
};