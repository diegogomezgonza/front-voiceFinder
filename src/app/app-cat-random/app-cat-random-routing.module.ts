import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCatRandomPage } from './app-cat-random.page';

const routes: Routes = [
  {
    path: '',
    component: AppCatRandomPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCatRandomPageRoutingModule {}
