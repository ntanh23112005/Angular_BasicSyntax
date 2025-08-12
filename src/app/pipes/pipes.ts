import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from './reversePipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, ReversePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  today: Date = new Date();
}
