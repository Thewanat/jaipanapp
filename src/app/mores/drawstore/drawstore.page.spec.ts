import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawstorePage } from './drawstore.page';

describe('DrawstorePage', () => {
  let component: DrawstorePage;
  let fixture: ComponentFixture<DrawstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawstorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
