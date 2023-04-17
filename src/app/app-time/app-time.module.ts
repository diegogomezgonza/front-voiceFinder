import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppTimePageRoutingModule } from './app-time-routing.module';
import { AppTimePage } from './app-time.page';
import { NgChartsModule } from 'ng2-charts';
import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    ComponentsModule,
    AppTimePageRoutingModule
  ],
  declarations: [AppTimePage]
})
export class AppTimePageModule {}
