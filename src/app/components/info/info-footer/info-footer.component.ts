import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-footer',
  templateUrl: './info-footer.component.html',
  styleUrls: ['./info-footer.component.scss'],
})
export class InfoFooterComponent implements OnInit {

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
