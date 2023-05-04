import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMyPodcastPageRoutingModule } from './app-my-podcast-routing.module';

import { AppMyPodcastPage } from './app-my-podcast.page';

import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMyPodcastPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AppMyPodcastPage],
})
export class AppMyPodcastPageModule {}
