import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-category-slide',
  templateUrl: './home-category-slide.component.html',
  styleUrls: ['./home-category-slide.component.scss'],
})
export class HomeCategorySlideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goInterview() {
    this.router.navigate(['app-cat-interview']);
  }

  goFreak() {
    this.router.navigate(['app-cat-freak']);
  }

  goRandom() {
    this.router.navigate(['app-cat-random']);
  }
}
