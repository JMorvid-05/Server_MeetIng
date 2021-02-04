import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HprojectComponent } from './hproject.component';

describe('HprojectComponent', () => {
  let component: HprojectComponent;
  let fixture: ComponentFixture<HprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
