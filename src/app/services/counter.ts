import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //phạm vi cung cấp service
})
export class CounterService {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
