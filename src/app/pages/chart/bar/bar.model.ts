import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend,
  ApexGrid,
  ApexStates
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  dataLabels?: ApexDataLabels;
  plotOptions?: ApexPlotOptions;
  xaxis?: ApexXAxis;
  colors?: any;
  stroke?: ApexStroke;
  yaxis?: ApexYAxis;
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
  fill?: ApexFill;
  legend?: ApexLegend;
  grid?: ApexGrid;
  annotations?: any; //ApexAnnotations;
  states?: ApexStates;
  labels?: number[];
};