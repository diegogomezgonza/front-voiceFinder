import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAddictPageRoutingModule } from './app-addict-routing.module';

import { AppAddictPage } from './app-addict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAddictPageRoutingModule
  ],
  declarations: [AppAddictPage]
})
export class AppAddictPageModule {}
