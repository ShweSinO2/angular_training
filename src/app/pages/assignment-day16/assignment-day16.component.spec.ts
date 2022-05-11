import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay16Component } from './assignment-day16.component';

describe('AssignmentDay16Component', () => {
  let component: AssignmentDay16Component;
  let fixture: ComponentFixture<AssignmentDay16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
