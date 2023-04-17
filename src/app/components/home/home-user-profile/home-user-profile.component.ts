import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user-profile',
  templateUrl: './home-user-profile.component.html',
  styleUrls: ['./home-user-profile.component.scss'],
})
export class HomeUserProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a usuario
  goUser() {
    this.router.navigate(['app-profile']);
  }
}
