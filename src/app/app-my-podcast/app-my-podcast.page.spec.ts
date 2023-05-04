import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMyPodcastPage } from './app-my-podcast.page';

describe('AppMyPodcastPage', () => {
  let component: AppMyPodcastPage;
  let fixture: ComponentFixture<AppMyPodcastPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppMyPodcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
