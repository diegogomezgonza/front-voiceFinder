import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Función ir a información podcast
  goInfo() {
    this.router.navigate(['podcast-info']);
  }

  // Función ir a tiempo de uso
  goTime() {
    this.router.navigate(['app-addict']);
  }

  //Ir a crear podcast
  goAction() {
    this.router.navigate(['podcast-action']);
  }

  //Ir a ver podcast
  goWatch() {
    this.router.navigate(['app-my-podcast']);
  }
}
