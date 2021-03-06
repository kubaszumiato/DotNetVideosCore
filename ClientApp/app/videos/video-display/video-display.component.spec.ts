/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDisplayComponent } from './video-display.component';

describe('VideoDisplayComponent', () => {
  let component: VideoDisplayComponent;
  let fixture: ComponentFixture<VideoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
