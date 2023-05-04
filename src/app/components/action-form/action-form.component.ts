import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss'],
})
export class ActionFormComponent  implements OnInit {

  formulario: FormGroup;

  constructor(
    private dataService: DataService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit() {}

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.dataService.addPodcast(this.formulario.value);
    console.log(response);
  }
}
