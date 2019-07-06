import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPage } from './liked.page';

describe('LikedPage', () => {
  let component: LikedPage;
  let fixture: ComponentFixture<LikedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
