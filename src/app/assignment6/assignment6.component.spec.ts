import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment6Component } from './assignment6.component';

describe('Assignment6Component', () => {
  let component: Assignment6Component;
  let fixture: ComponentFixture<Assignment6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assignment6Component]
    });
    fixture = TestBed.createComponent(Assignment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
