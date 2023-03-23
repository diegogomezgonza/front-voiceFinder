import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTimePage } from './app-time.page';

const routes: Routes = [
  {
    path: '',
    component: AppTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTimePageRoutingModule {}
