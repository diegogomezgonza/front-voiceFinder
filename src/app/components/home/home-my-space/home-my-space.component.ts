import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-my-space',
  templateUrl: './home-my-space.component.html',
  styleUrls: ['./home-my-space.component.scss'],
})
export class HomeMySpaceComponent implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() {}

  ngOnInit() {}
}
