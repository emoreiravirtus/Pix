/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Payments } from './payments.component';

describe('SecondComponent', () => {
  let component: Payments;
  let fixture: ComponentFixture<Payments>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payments ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Payments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
