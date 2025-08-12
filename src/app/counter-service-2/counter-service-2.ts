import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterService } from '../services/counter';

@Component({
  selector: 'app-counter-service-2',
  imports: [CommonModule],
  templateUrl: './counter-service-2.html',
  styleUrl: './counter-service-2.css',
})
export class CounterService2Component {
  constructor(public counterService: CounterService) {}
}
