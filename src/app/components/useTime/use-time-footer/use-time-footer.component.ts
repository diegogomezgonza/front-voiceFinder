import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-use-time-footer',
  templateUrl: './use-time-footer.component.html',
  styleUrls: ['./use-time-footer.component.scss'],
})
export class UseTimeFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }
}
