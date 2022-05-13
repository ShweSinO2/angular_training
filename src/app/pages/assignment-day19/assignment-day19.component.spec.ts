import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay19Component } from './assignment-day19.component';

describe('AssignmentDay19Component', () => {
  let component: AssignmentDay19Component;
  let fixture: ComponentFixture<AssignmentDay19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
