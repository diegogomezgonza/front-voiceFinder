import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'podcast-info',
    loadChildren: () =>
      import('./app-info/podcast-info.module').then(
        (m) => m.PodcastInfoPageModule
      ),
  },
  {
    path: 'podcast-action',
    loadChildren: () =>
      import('./app-action/podcast-action.module').then(
        (m) => m.PodcastActionPageModule
      ),
  },
  {
    path: 'app-time',
    loadChildren: () =>
      import('./app-time/app-time.module').then((m) => m.AppTimePageModule),
  },
  {
    path: 'app-profile',
    loadChildren: () =>
      import('./app-profile/app-profile.module').then(
        (m) => m.AppProfilePageModule
      ),
  },
  {
    path: 'app-use-time',
    loadChildren: () =>
      import('./app-use-time/app-use-time.module').then(
        (m) => m.AppUseTimePageModule
      ),
  },
  {
    path: 'app-most-used',
    loadChildren: () =>
      import('./app-most-used/app-most-used.module').then(
        (m) => m.AppMostUsedPageModule
      ),
  },
  {
    path: 'app-addict',
    loadChildren: () =>
      import('./app-addict/app-addict.module').then(
        (m) => m.AppAddictPageModule
      ),
  },
  {
    path: 'app-cat-interview',
    loadChildren: () =>
      import('./app-cat-interview/app-cat-interview.module').then(
        (m) => m.AppCatInterviewPageModule
      ),
  },
  {
    path: 'app-cat-freak',
    loadChildren: () =>
      import('./app-cat-freak/app-cat-freak.module').then(
        (m) => m.AppCatFreakPageModule
      ),
  },
  {
    path: 'app-cat-random',
    loadChildren: () =>
      import('./app-cat-random/app-cat-random.module').then(
        (m) => m.AppCatRandomPageModule
      ),
  },
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
