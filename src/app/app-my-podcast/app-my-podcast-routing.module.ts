import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMyPodcastPage } from './app-my-podcast.page';

const routes: Routes = [
  {
    path: '',
    component: AppMyPodcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMyPodcastPageRoutingModule {}
