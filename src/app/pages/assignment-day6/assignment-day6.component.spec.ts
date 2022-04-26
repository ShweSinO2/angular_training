import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay6Component } from './assignment-day6.component';

describe('AssignmentDay6Component', () => {
  let component: AssignmentDay6Component;
  let fixture: ComponentFixture<AssignmentDay6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
