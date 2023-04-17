import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeCategorySlideComponent } from './home/home-category-slide/home-category-slide.component';
import { HomeMySpaceComponent } from './home/home-my-space/home-my-space.component';
import { HomeProfilesSlideComponent } from './home/home-profiles-slide/home-profiles-slide.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { TimeGraphicComponent } from './time/time-graphic/time-graphic.component';
import { TimeFooterComponent } from './time/time-footer/time-footer.component';
import { AddictCardsComponent } from './addict/addict-cards/addict-cards.component';
import { AddictFooterComponent } from './addict/addict-footer/addict-footer.component';
import { ProfileFooterComponent } from './profile/profile-footer/profile-footer.component';
import { MostUsedFooterComponent } from './mostUsed/most-used-footer/most-used-footer.component';
import { UseTimeFooterComponent } from './useTime/use-time-footer/use-time-footer.component';
import { InfoFooterComponent } from './info/info-footer/info-footer.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HomeCategorySlideComponent,
    HomeMySpaceComponent,
    HomeProfilesSlideComponent,
    HomeFooterComponent,
    TimeGraphicComponent,
    TimeFooterComponent,
    AddictCardsComponent,
    AddictFooterComponent,
    ProfileFooterComponent,
    MostUsedFooterComponent,
    UseTimeFooterComponent,
    InfoFooterComponent

  ],
  imports: [CommonModule, NgChartsModule, IonicModule],
  exports: [
    HomeCategorySlideComponent,
    HomeMySpaceComponent,
    HomeProfilesSlideComponent,
    TimeGraphicComponent,
    TimeFooterComponent,
    AddictCardsComponent,
    AddictFooterComponent,
    ProfileFooterComponent,
    MostUsedFooterComponent,
    UseTimeFooterComponent,
    InfoFooterComponent
  ],
})
export class ComponentsModule {}
