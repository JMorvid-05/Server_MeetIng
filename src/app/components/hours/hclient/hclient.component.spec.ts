import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HclientComponent } from './hclient.component';

describe('HclientComponent', () => {
  let component: HclientComponent;
  let fixture: ComponentFixture<HclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
