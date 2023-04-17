import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import { HomeCategorySlideComponent } from './home-category-slide/home-category-slide.component';
import { HomeMySpaceComponent } from './home-my-space/home-my-space.component';
import { HomeProfilesSlideComponent } from './home-profiles-slide/home-profiles-slide.component';

@NgModule({
  declarations: [HomeCategorySlideComponent, HomeMySpaceComponent, HomeProfilesSlideComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [HomeCategorySlideComponent, HomeMySpaceComponent, HomeProfilesSlideComponent],
})
export class ComponentsModule { }
