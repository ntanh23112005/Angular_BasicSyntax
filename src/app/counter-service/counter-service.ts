import { Component } from '@angular/core';
import { CounterService } from '../services/counter';

@Component({
  selector: 'app-counter-service',
  imports: [],
  templateUrl: './counter-service.html',
  styleUrl: './counter-service.css',
})
export class CounterServiceComponent {
  constructor(public counterService: CounterService) {}
}
