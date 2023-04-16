import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-addict',
  templateUrl: './app-addict.page.html',
  styleUrls: ['./app-addict.page.scss'],
})
export class AppAddictPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función ir a gráfico de edades
  goAge() {
    this.router.navigate(['app-time']);
  }

  // Función ir a gráfico de tiempo de uso
  goUseTime() {
    this.router.navigate(['app-use-time']);
  }

  // Función ir a gráfico mas usadas
  goMostUsed() {
    this.router.navigate(['app-most-used']);
  }

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
