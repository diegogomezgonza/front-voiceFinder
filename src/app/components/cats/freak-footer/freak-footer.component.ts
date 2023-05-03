import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freak-footer',
  templateUrl: './freak-footer.component.html',
  styleUrls: ['./freak-footer.component.scss'],
})
export class FreakFooterComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
