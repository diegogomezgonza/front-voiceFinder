import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastInfoPageRoutingModule } from './podcast-info-routing.module';

import { PodcastInfoPage } from './podcast-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastInfoPageRoutingModule
  ],
  declarations: [PodcastInfoPage]
})
export class PodcastInfoPageModule {}
