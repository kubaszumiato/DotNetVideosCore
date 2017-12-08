import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBarComponent } from './login-bar.component';

describe('LoginBarComponent', () => {
  let component: LoginBarComponent;
  let fixture: ComponentFixture<LoginBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
