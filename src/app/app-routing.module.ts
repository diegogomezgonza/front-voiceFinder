import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

//Rutas de Voice Finder
const routes: Routes = [
  //Login
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  //Home
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  //Crear podcast
  {
    path: 'podcast-action',
    loadChildren: () =>
      import('./app-action/podcast-action.module').then(
        (m) => m.PodcastActionPageModule
      ),
  },
  //Adicción por edades
  {
    path: 'app-time',
    loadChildren: () =>
      import('./app-time/app-time.module').then((m) => m.AppTimePageModule),
  },
  //Usuario
  {
    path: 'app-profile',
    loadChildren: () =>
      import('./app-profile/app-profile.module').then(
        (m) => m.AppProfilePageModule
      ),
  },
  //Aplicaciones más usadas
  {
    path: 'app-use-time',
    loadChildren: () =>
      import('./app-use-time/app-use-time.module').then(
        (m) => m.AppUseTimePageModule
      ),
  },
  //Redes sociales
  {
    path: 'app-most-used',
    loadChildren: () =>
      import('./app-most-used/app-most-used.module').then(
        (m) => m.AppMostUsedPageModule
      ),
  },
  //Timelapse
  {
    path: 'app-addict',
    loadChildren: () =>
      import('./app-addict/app-addict.module').then(
        (m) => m.AppAddictPageModule
      ),
  },
  //Categoría interview
  {
    path: 'app-cat-interview',
    loadChildren: () =>
      import('./app-cat-interview/app-cat-interview.module').then(
        (m) => m.AppCatInterviewPageModule
      ),
  },
  //Categoría freak
  {
    path: 'app-cat-freak',
    loadChildren: () =>
      import('./app-cat-freak/app-cat-freak.module').then(
        (m) => m.AppCatFreakPageModule
      ),
  },
  //Categoría random
  {
    path: 'app-cat-random',
    loadChildren: () =>
      import('./app-cat-random/app-cat-random.module').then(
        (m) => m.AppCatRandomPageModule
      ),
  },
  //Visualizar podcasts
  {
    path: 'app-my-podcast',
    loadChildren: () =>
      import('./app-my-podcast/app-my-podcast.module').then(
        (m) => m.AppMyPodcastPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
