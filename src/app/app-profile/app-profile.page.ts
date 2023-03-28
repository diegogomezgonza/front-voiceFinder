import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
