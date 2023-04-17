import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import { HomeCategorySlideComponent } from './home-category-slide/home-category-slide.component';
import { HomeMySpaceComponent } from './home-my-space/home-my-space.component';
import { HomeProfilesSlideComponent } from './home-profiles-slide/home-profiles-slide.component';
import { TimeGraphicComponent } from './time-graphic/time-graphic.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [HomeCategorySlideComponent, HomeMySpaceComponent, HomeProfilesSlideComponent, TimeGraphicComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    IonicModule
  ], exports: [HomeCategorySlideComponent, HomeMySpaceComponent, HomeProfilesSlideComponent, TimeGraphicComponent],
})
export class ComponentsModule { }
