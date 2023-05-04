import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss'],
})
export class ActionFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private dataService: DataService,
    private toastController: ToastController
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      author: new FormControl(),
      theme: new FormControl(),
    });
  }

  ngOnInit() {}

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.dataService.addPodcast(this.formulario.value);
    console.log(response);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Podcast creado',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
