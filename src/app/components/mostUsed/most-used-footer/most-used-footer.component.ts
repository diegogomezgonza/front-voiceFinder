import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most-used-footer',
  templateUrl: './most-used-footer.component.html',
  styleUrls: ['./most-used-footer.component.scss'],
})
export class MostUsedFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  //Función ir a timelapse
  goLapse() {
    this.router.navigate(['app-addict']);
  }
}
