import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckusersComponent } from './checkusers.component';

describe('CheckusersComponent', () => {
  let component: CheckusersComponent;
  let fixture: ComponentFixture<CheckusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
