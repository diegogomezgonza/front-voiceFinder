import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppCatInterviewPageRoutingModule } from './app-cat-interview-routing.module';

import { AppCatInterviewPage } from './app-cat-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppCatInterviewPageRoutingModule
  ],
  declarations: [AppCatInterviewPage]
})
export class AppCatInterviewPageModule {}
