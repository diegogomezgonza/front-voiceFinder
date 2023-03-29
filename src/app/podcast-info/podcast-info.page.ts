import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast-info',
  templateUrl: './podcast-info.page.html',
  styleUrls: ['./podcast-info.page.scss'],
})


export class PodcastInfoPage implements OnInit {

  public currentDate: string;

  constructor(private router: Router) {

    this.currentDate = ( Date()).toString();
  }

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
