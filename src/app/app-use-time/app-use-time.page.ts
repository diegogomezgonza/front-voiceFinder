import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-use-time',
  templateUrl: './app-use-time.page.html',
  styleUrls: ['./app-use-time.page.scss'],
})
export class AppUseTimePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }
}
