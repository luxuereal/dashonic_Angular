import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexLegend,
    ApexDataLabels,
    ApexTheme,
    ApexTitleSubtitle,
    ApexPlotOptions,
    ApexFill,
    ApexStroke,
    ApexStates,
    ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
    series?: ApexNonAxisChartSeries;
    chart?: ApexChart;
    responsive?: ApexResponsive[];
    labels?: any;
    legend?: ApexLegend;
    dataLabels?: ApexDataLabels;
    colors?: string[];
    theme?: ApexTheme;
    title?: ApexTitleSubtitle;
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    stroke?: ApexStroke;
    states?: ApexStates;
    grid?: ApexGrid
};