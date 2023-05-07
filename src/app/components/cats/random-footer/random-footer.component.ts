import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-footer',
  templateUrl: './random-footer.component.html',
  styleUrls: ['./random-footer.component.scss'],
})
export class RandomFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
