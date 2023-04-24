import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-time-graphic',
  templateUrl: './time-graphic.component.html',
  styleUrls: ['./time-graphic.component.scss'],
})
export class TimeGraphicComponent implements OnInit {
  //Info de mi gráfico
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    color: 'white',
  };
  public pieChartLabels = [['13-17'], ['18-24'], ['25-34'], ['35-44']];
  public pieChartDatasets = [
    {
      data: [73, 71, 59, 54],
      backgroundColor: ['#055aaf', '#e4e208', '#00a8ff', '#f1ddcb'],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
