import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay15Component } from './assignment-day15.component';

describe('AssignmentDay15Component', () => {
  let component: AssignmentDay15Component;
  let fixture: ComponentFixture<AssignmentDay15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
