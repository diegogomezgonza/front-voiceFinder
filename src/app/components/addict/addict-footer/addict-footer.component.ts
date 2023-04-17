import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addict-footer',
  templateUrl: './addict-footer.component.html',
  styleUrls: ['./addict-footer.component.scss'],
})
export class AddictFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
