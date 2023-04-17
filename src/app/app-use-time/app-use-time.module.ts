import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppUseTimePageRoutingModule } from './app-use-time-routing.module';

import { AppUseTimePage } from './app-use-time.page';

import { NgChartsModule } from 'ng2-charts';

import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    ComponentsModule,
    AppUseTimePageRoutingModule
  ],
  declarations: [AppUseTimePage]
})
export class AppUseTimePageModule {}
