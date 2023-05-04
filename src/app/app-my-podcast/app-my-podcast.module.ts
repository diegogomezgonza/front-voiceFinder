import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMyPodcastPageRoutingModule } from './app-my-podcast-routing.module';

import { AppMyPodcastPage } from './app-my-podcast.page';

import { ComponentsModule } from '../components/components.module';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMyPodcastPageRoutingModule,
    ComponentsModule,
    ScrollingModule
  ],
  declarations: [AppMyPodcastPage],
})
export class AppMyPodcastPageModule {}
