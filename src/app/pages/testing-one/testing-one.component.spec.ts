import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingOneComponent } from './testing-one.component';

describe('TestingOneComponent', () => {
  let component: TestingOneComponent;
  let fixture: ComponentFixture<TestingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
