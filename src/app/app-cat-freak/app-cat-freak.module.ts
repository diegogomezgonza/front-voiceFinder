import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCatFreakPageRoutingModule } from './app-cat-freak-routing.module';

import { AppCatFreakPage } from './app-cat-freak.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCatFreakPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AppCatFreakPage],
})
export class AppCatFreakPageModule {}
