import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay26Component } from './assignment-day26.component';

describe('AssignmentDay26Component', () => {
  let component: AssignmentDay26Component;
  let fixture: ComponentFixture<AssignmentDay26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
