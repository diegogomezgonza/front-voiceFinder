import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-footer',
  templateUrl: './action-footer.component.html',
  styleUrls: ['./action-footer.component.scss'],
})
export class ActionFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
