import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-app-time',
  templateUrl: './app-time.page.html',
  styleUrls: ['./app-time.page.scss'],
})
export class AppTimePage implements OnInit {

  //Info de mi gráfico
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Niños'], [ 'Adolescentes' ], 'Adultos' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }

}
