import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexLegend,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  labels?: string[];
  stroke?: any; // ApexStroke;
  dataLabels?: any; // ApexDataLabels;
  fill?: ApexFill;
  tooltip?: ApexTooltip;
  markers?: any; //ApexMarkers;
  legend?: ApexLegend;
  colors?: any;
  plotOptions?: ApexPlotOptions;
};