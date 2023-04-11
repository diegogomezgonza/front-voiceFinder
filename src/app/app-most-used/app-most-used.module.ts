import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMostUsedPageRoutingModule } from './app-most-used-routing.module';

import { AppMostUsedPage } from './app-most-used.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMostUsedPageRoutingModule
  ],
  declarations: [AppMostUsedPage]
})
export class AppMostUsedPageModule {}
