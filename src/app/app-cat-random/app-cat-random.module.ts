import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCatRandomPageRoutingModule } from './app-cat-random-routing.module';

import { AppCatRandomPage } from './app-cat-random.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCatRandomPageRoutingModule
  ],
  declarations: [AppCatRandomPage]
})
export class AppCatRandomPageModule {}
