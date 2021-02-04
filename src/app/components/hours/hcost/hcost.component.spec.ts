import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcostComponent } from './hcost.component';

describe('HcostComponent', () => {
  let component: HcostComponent;
  let fixture: ComponentFixture<HcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
