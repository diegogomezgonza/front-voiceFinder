import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeProfilesSlideComponent } from './home-profiles-slide.component';

describe('HomeProfilesSlideComponent', () => {
  let component: HomeProfilesSlideComponent;
  let fixture: ComponentFixture<HomeProfilesSlideComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProfilesSlideComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProfilesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
