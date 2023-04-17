import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastActionPage } from './podcast-action.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastActionPageRoutingModule {}
