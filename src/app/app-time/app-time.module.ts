import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppTimePageRoutingModule } from './app-time-routing.module';

import { AppTimePage } from './app-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTimePageRoutingModule
  ],
  declarations: [AppTimePage]
})
export class AppTimePageModule {}
