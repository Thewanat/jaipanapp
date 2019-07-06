import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwdPage } from './changepwd.page';

describe('ChangepwdPage', () => {
  let component: ChangepwdPage;
  let fixture: ComponentFixture<ChangepwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepwdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
