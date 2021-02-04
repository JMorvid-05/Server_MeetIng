import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcountryComponent } from './hcountry.component';

describe('HcountryComponent', () => {
  let component: HcountryComponent;
  let fixture: ComponentFixture<HcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
