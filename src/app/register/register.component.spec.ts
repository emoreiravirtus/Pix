/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterPayment } from './register.component';

describe('FirstComponent', () => {
  let component: RegisterPayment;
  let fixture: ComponentFixture<RegisterPayment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPayment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
