import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cover500Component } from './cover500.component';

describe('Cover500Component', () => {
  let component: Cover500Component;
  let fixture: ComponentFixture<Cover500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cover500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cover500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
