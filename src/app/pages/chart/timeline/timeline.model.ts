import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexLegend,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  colors?: any;
  fill?: ApexFill;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  stroke?: ApexStroke;
};