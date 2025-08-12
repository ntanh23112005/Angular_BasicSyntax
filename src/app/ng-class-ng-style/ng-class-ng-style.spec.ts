import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassNgStyle } from './ng-class-ng-style';

describe('NgClassNgStyle', () => {
  let component: NgClassNgStyle;
  let fixture: ComponentFixture<NgClassNgStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassNgStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassNgStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
