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
    //Opciones del gráfico
    responsive: false,
    color: 'white',
  };
  //Edades
  public pieChartLabels = [['13-17'], ['18-24'], ['25-34'], ['35-44']];
  //Valor de porcentaje + colores
  public pieChartDatasets = [
    {
      data: [73, 71, 59, 54],
      backgroundColor: ['#055aaf', '#e4e208', '#00a8ff', '#f1ddcb'],
    },
  ];
  //Mostrar legenda de gráfico
  public pieChartLegend = true;
  //Plugins
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
