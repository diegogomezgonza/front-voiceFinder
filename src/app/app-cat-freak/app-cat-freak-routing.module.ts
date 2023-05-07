import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCatFreakPage } from './app-cat-freak.page';

const routes: Routes = [
  {
    path: '',
    component: AppCatFreakPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCatFreakPageRoutingModule {}
