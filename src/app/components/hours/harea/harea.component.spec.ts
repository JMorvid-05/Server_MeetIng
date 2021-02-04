import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HareaComponent } from './harea.component';

describe('HareaComponent', () => {
  let component: HareaComponent;
  let fixture: ComponentFixture<HareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
