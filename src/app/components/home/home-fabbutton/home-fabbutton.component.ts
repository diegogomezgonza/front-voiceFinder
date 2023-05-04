import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-fabbutton',
  templateUrl: './home-fabbutton.component.html',
  styleUrls: ['./home-fabbutton.component.scss'],
})
export class HomeFabbuttonComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goAction() {
    this.router.navigate(['podcast-action']);
  }

  goWatch() {
    this.router.navigate(['app-my-podcast']);
  }
}
