import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCatRandomPageRoutingModule } from './app-cat-random-routing.module';

import { AppCatRandomPage } from './app-cat-random.page';

import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCatRandomPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AppCatRandomPage]
})
export class AppCatRandomPageModule {}
