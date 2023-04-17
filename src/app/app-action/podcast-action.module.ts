import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastActionPageRoutingModule } from './podcast-action-routing.module';

import { PodcastActionPage } from './podcast-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastActionPageRoutingModule
  ],
  declarations: [PodcastActionPage]
})
export class PodcastActionPageModule {}
