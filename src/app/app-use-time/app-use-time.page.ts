import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-app-use-time',
  templateUrl: './app-use-time.page.html',
  styleUrls: ['./app-use-time.page.scss'],
})
export class AppUseTimePage implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
    })
   }

  ngOnInit() {
  }

}
