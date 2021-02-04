import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpersonqrComponent } from './hpersonqr.component';

describe('HpersonqrComponent', () => {
  let component: HpersonqrComponent;
  let fixture: ComponentFixture<HpersonqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpersonqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpersonqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
