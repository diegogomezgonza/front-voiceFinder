import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, Legend } from 'chart.js';

@Component({
  selector: 'app-app-time',
  templateUrl: './app-time.page.html',
  styleUrls: ['./app-time.page.scss'],
})
export class AppTimePage implements OnInit {

  //Info de mi gráfico
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    color: "white"
  };
  public pieChartLabels = [ [ '13-17'], [ '18-24' ], ['25-34'], ['35-44'], ['45-54'], ['55-64'], ['64+'] ];
  public pieChartDatasets = [ {
    data: [ 73, 71, 59, 54, 40, 39, 44 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];



  constructor(private router: Router) {}

  ngOnInit() {
  }

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }

}
