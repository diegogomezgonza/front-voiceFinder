import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastActionPageRoutingModule } from './podcast-action-routing.module';

import { PodcastActionPage } from './podcast-action.page';

import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastActionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PodcastActionPage],
})
export class PodcastActionPageModule {}
