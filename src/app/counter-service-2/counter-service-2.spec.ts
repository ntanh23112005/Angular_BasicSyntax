import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterService2 } from './counter-service-2';

describe('CounterService2', () => {
  let component: CounterService2;
  let fixture: ComponentFixture<CounterService2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterService2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterService2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
