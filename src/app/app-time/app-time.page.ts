import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-time',
  templateUrl: './app-time.page.html',
  styleUrls: ['./app-time.page.scss'],
})
export class AppTimePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }


  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }

}
