import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppUseTimePageRoutingModule } from './app-use-time-routing.module';

import { AppUseTimePage } from './app-use-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppUseTimePageRoutingModule
  ],
  declarations: [AppUseTimePage]
})
export class AppUseTimePageModule {}
