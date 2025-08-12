import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.html',
  styleUrls: ['./hello.css'],
})
export class HelloComponet {
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  count: number = 0;
  increase() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }

  message: string = '';
  name: string = 'Anh Thế Đẹp Trai';
  sayHello() {
    this.message = `Xin Chào, ${this.name} !`;
  }

  // cha -> con
  @Input() title: string = '';
  // con -> cha
  @Output() nameChanged = new EventEmitter<string>();
  childName: string = '';

  sendName() {
    this.nameChanged.emit(this.childName);
  }
}
