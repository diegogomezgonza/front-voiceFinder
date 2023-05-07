import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastInfoPage } from './podcast-info.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastInfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastInfoPageRoutingModule {}
