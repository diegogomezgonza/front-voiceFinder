import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAddictPage } from './app-addict.page';

const routes: Routes = [
  {
    path: '',
    component: AppAddictPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAddictPageRoutingModule {}
