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

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
