import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReademailComponent } from './reademail.component';

describe('ReademailComponent', () => {
  let component: ReademailComponent;
  let fixture: ComponentFixture<ReademailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReademailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReademailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
