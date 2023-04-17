import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-footer',
  templateUrl: './profile-footer.component.html',
  styleUrls: ['./profile-footer.component.scss'],
})
export class ProfileFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
