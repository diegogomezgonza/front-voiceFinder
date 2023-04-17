import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppProfilePageRoutingModule } from './app-profile-routing.module';

import { AppProfilePage } from './app-profile.page';

import {ComponentsModule} from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AppProfilePageRoutingModule
  ],
  declarations: [AppProfilePage]
})
export class AppProfilePageModule {}
