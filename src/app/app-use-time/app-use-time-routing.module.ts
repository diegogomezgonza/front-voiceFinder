import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppUseTimePage } from './app-use-time.page';

const routes: Routes = [
  {
    path: '',
    component: AppUseTimePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppUseTimePageRoutingModule {}
