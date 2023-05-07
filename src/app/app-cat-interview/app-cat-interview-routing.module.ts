import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppCatInterviewPage } from './app-cat-interview.page';

const routes: Routes = [
  {
    path: '',
    component: AppCatInterviewPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCatInterviewPageRoutingModule {}
