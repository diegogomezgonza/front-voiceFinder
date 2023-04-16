import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-most-used',
  templateUrl: './app-most-used.page.html',
  styleUrls: ['./app-most-used.page.scss'],
})
export class AppMostUsedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }

}
