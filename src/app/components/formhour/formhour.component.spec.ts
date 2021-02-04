import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhourComponent } from './formhour.component';

describe('FormhourComponent', () => {
  let component: FormhourComponent;
  let fixture: ComponentFixture<FormhourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormhourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
