import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-footer',
  templateUrl: './time-footer.component.html',
  styleUrls: ['./time-footer.component.scss'],
})
export class TimeFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }
}
