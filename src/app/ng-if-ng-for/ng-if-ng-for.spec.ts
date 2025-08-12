import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgFor } from './ng-if-ng-for';

describe('NgIfNgFor', () => {
  let component: NgIfNgFor;
  let fixture: ComponentFixture<NgIfNgFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfNgFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfNgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
