import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlistComponent } from './hourlist.component';

describe('HourlistComponent', () => {
  let component: HourlistComponent;
  let fixture: ComponentFixture<HourlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
