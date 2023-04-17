import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast-action',
  templateUrl: './podcast-action.page.html',
  styleUrls: ['./podcast-action.page.scss'],
})
export class PodcastActionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }

}
