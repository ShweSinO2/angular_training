import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay10Component } from './assignment-day10.component';

describe('AssignmentDay10Component', () => {
  let component: AssignmentDay10Component;
  let fixture: ComponentFixture<AssignmentDay10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
