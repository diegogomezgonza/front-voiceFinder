import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMostUsedPage } from './app-most-used.page';

const routes: Routes = [
  {
    path: '',
    component: AppMostUsedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMostUsedPageRoutingModule {}
