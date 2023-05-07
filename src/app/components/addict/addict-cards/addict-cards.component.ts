import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addict-cards',
  templateUrl: './addict-cards.component.html',
  styleUrls: ['./addict-cards.component.scss'],
})
export class AddictCardsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Función ir a gráfico de edades
  goAge() {
    this.router.navigate(['app-time']);
  }

  // Función ir a más usadas
  goUseTime() {
    this.router.navigate(['app-use-time']);
  }

  // Función ir a redes sociales
  goMostUsed() {
    this.router.navigate(['app-most-used']);
  }
}
