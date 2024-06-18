import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {
  userEmail: string;
  constructor(private router: Router,
    //Datos de autentificación de firebase
    private afAuth: AngularFireAuth) {}

  //Recoger información del usuario
  async getCurrentUser() {
    this.afAuth.authState.subscribe((user) => {
      // Usuario está autenticado
      if (user) {
        // Obtener y almacenar el correo electrónico del usuario
        this.userEmail = user.email;
      } else {
        // No hay usuario autenticado
        console.log('No hay usuario autenticado');
      }
    });
  }

  ngOnInit() {
    this.getCurrentUser();
  }


  // Función ir a home
  goHome() {
    this.router.navigate(['home']);
  }
}
