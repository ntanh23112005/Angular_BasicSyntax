import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-class-ng-style.html',
  styleUrl: './ng-class-ng-style.css',
})
export class NgClassNgStyle {
  isHighlight: boolean = false;
  fontSize: number = 16;
}
