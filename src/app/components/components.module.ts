import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeCategorySlideComponent } from './home/home-category-slide/home-category-slide.component';
import { HomeMySpaceComponent } from './home/home-my-space/home-my-space.component';
import { HomeProfilesSlideComponent } from './home/home-profiles-slide/home-profiles-slide.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeUserProfileComponent } from './home/home-user-profile/home-user-profile.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { HomeFabbuttonComponent } from './home/home-fabbutton/home-fabbutton.component';
import { TimeGraphicComponent } from './time/time-graphic/time-graphic.component';
import { TimeFooterComponent } from './time/time-footer/time-footer.component';
import { TimeModalComponent } from './time/time-modal/time-modal.component';
import { TimeInfoComponent } from './time/time-info/time-info.component';
import { AddictCardsComponent } from './addict/addict-cards/addict-cards.component';
import { AddictFooterComponent } from './addict/addict-footer/addict-footer.component';
import { ProfileFooterComponent } from './profile/profile-footer/profile-footer.component';
import { MostUsedFooterComponent } from './mostUsed/most-used-footer/most-used-footer.component';
import { MostUsedModalComponent } from './mostUsed/most-used-modal/most-used-modal.component';
import { MostUsedYoutubeComponent } from './mostUsed/most-used-youtube/most-used-youtube.component';
import { UseTimeFooterComponent } from './useTime/use-time-footer/use-time-footer.component';
import { UseTimeVideosComponent } from './useTime/use-time-videos/use-time-videos.component';
import { UseTimeModalComponent } from './useTime/use-time-modal/use-time-modal.component';
import { UseTimeInfoComponent } from './useTime/use-time-info/use-time-info.component';
import { InfoFooterComponent } from './info/info-footer/info-footer.component';
import { InfoContentComponent } from './info/info-content/info-content.component';
import { InterviewFooterComponent } from './cats/interview-footer/interview-footer.component';
import { FreakFooterComponent } from './cats/freak-footer/freak-footer.component';
import { RandomFooterComponent } from './cats/random-footer/random-footer.component';
import { ActionFooterComponent } from './action/action-footer/action-footer.component';
import { ActionFormComponent } from './action/action-form/action-form.component';
import { ActionPodcastsComponent } from './action/action-podcasts/action-podcasts.component';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    HomeCategorySlideComponent,
    HomeMySpaceComponent,
    HomeProfilesSlideComponent,
    HomeFooterComponent,
    HomeUserProfileComponent,
    HomeUserComponent,
    HomeFabbuttonComponent,
    TimeGraphicComponent,
    TimeFooterComponent,
    TimeModalComponent,
    TimeInfoComponent,
    AddictCardsComponent,
    AddictFooterComponent,
    ProfileFooterComponent,
    MostUsedFooterComponent,
    MostUsedModalComponent,
    MostUsedYoutubeComponent,
    UseTimeFooterComponent,
    UseTimeVideosComponent,
    UseTimeModalComponent,
    UseTimeInfoComponent,
    InfoFooterComponent,
    InterviewFooterComponent,
    InfoContentComponent,
    FreakFooterComponent,
    RandomFooterComponent,
    ActionFooterComponent,
    ActionFormComponent,
    ActionPodcastsComponent
  ],
  imports: [CommonModule, NgChartsModule, IonicModule, ReactiveFormsModule, ScrollingModule],
  exports: [
    HomeCategorySlideComponent,
    HomeMySpaceComponent,
    HomeProfilesSlideComponent,
    HomeFooterComponent,
    HomeUserProfileComponent,
    HomeUserComponent,
    HomeFabbuttonComponent,
    TimeGraphicComponent,
    TimeFooterComponent,
    TimeModalComponent,
    TimeInfoComponent,
    AddictCardsComponent,
    AddictFooterComponent,
    ProfileFooterComponent,
    MostUsedFooterComponent,
    MostUsedModalComponent,
    MostUsedYoutubeComponent,
    UseTimeFooterComponent,
    UseTimeVideosComponent,
    UseTimeModalComponent,
    UseTimeInfoComponent,
    InfoFooterComponent,
    InfoContentComponent,
    InterviewFooterComponent,
    FreakFooterComponent,
    RandomFooterComponent,
    ActionFooterComponent,
    ActionFormComponent,
    ActionPodcastsComponent
  ],
})
export class ComponentsModule {}
