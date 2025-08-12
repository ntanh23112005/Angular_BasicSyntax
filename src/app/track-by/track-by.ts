import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-track-by',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './track-by.html',
  styleUrl: './track-by.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackBy {
  items = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ];

  addItem() {
    // tạo array mới để OnPush nhận diện thay đổi
    this.items = [...this.items, { id: 3, name: 'C' }];
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
