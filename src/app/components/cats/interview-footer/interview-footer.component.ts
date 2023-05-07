import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-footer',
  templateUrl: './interview-footer.component.html',
  styleUrls: ['./interview-footer.component.scss'],
})
export class InterviewFooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
