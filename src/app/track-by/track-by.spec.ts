import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackBy } from './track-by';

describe('TrackBy', () => {
  let component: TrackBy;
  let fixture: ComponentFixture<TrackBy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackBy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackBy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
