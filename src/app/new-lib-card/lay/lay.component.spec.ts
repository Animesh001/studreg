/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayComponent } from './lay.component';

describe('LayComponent', () => {
  let component: LayComponent;
  let fixture: ComponentFixture<LayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
