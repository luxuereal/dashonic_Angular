import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cover404Component } from './cover404.component';

describe('Cover404Component', () => {
  let component: Cover404Component;
  let fixture: ComponentFixture<Cover404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cover404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cover404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
