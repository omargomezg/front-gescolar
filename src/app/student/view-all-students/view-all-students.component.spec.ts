import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllStudentsComponent } from './view-all-students.component';

describe('ViewAllStudentsComponent', () => {
  let component: ViewAllStudentsComponent;
  let fixture: ComponentFixture<ViewAllStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
