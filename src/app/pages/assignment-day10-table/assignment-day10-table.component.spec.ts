import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDay10TableComponent } from './assignment-day10-table.component';

describe('AssignmentDay10TableComponent', () => {
  let component: AssignmentDay10TableComponent;
  let fixture: ComponentFixture<AssignmentDay10TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDay10TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDay10TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
