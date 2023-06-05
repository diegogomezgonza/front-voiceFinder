import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Variable para almacenar credenciales
  cred: FormGroup;

  constructor(
    //Atributos para login
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  //Almacenar email
  get email() {
    return this.cred.get('email');
  }

  //Almacenar contraseña
  get password() {
    return this.cred.get('password');
  }

  ngOnInit() {
    //FormGroup para email y contraseña
    this.cred = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //Función para registrar usuario
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.cred.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Error al registrar', 'Prueba de nuevo');
    }
  }

  //Función para iniciar sesión
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.cred.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Error al iniciar sesión', 'Prueba de nuevo');
    }
  }

  //Función para mostrar alerts
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
