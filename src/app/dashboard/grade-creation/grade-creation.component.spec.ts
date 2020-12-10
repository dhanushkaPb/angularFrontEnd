import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCreationComponent } from './grade-creation.component';

describe('GradeCreationComponent', () => {
  let component: GradeCreationComponent;
  let fixture: ComponentFixture<GradeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
