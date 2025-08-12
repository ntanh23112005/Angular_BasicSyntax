import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterService } from './counter-service';

describe('CounterService', () => {
  let component: CounterService;
  let fixture: ComponentFixture<CounterService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
