import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawusePage } from './drawuse.page';

describe('DrawusePage', () => {
  let component: DrawusePage;
  let fixture: ComponentFixture<DrawusePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawusePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawusePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
