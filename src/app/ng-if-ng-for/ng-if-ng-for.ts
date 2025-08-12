import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-if-ng-for.html',
  styleUrl: './ng-if-ng-for.css',
})
export class NgIfNgFor {
  isVisible: boolean = true;
  users: string[] = ['Thế Anh', 'Thế Em', 'Thế Chú'];

  toogleShow() {
    this.isVisible = !this.isVisible;
  }
}
