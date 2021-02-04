import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdatexeComponent } from './hdatexe.component';

describe('HdatexeComponent', () => {
  let component: HdatexeComponent;
  let fixture: ComponentFixture<HdatexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdatexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdatexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
