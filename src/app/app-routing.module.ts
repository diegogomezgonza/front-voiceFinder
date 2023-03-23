import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'podcast-info',
    loadChildren: () => import('./podcast-info/podcast-info.module').then( m => m.PodcastInfoPageModule)
  },
  {
    path: 'podcast-action',
    loadChildren: () => import('./podcast-action/podcast-action.module').then( m => m.PodcastActionPageModule)
  },
  {
    path: 'app-time',
    loadChildren: () => import('./app-time/app-time.module').then( m => m.AppTimePageModule)
  },
  {
    path: 'app-profile',
    loadChildren: () => import('./app-profile/app-profile.module').then( m => m.AppProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
