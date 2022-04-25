import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay5Component } from './assignment-day5.component';

describe('AssignmentDay5Component', () => {
  let component: AssignmentDay5Component;
  let fixture: ComponentFixture<AssignmentDay5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
