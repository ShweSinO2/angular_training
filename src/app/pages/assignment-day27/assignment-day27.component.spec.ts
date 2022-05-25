import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay27Component } from './assignment-day27.component';

describe('AssignmentDay27Component', () => {
  let component: AssignmentDay27Component;
  let fixture: ComponentFixture<AssignmentDay27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
