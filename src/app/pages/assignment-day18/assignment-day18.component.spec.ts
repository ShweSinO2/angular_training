import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay18Component } from './assignment-day18.component';

describe('AssignmentDay18Component', () => {
  let component: AssignmentDay18Component;
  let fixture: ComponentFixture<AssignmentDay18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
