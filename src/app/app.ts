import { Component, NgModule, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HelloComponet } from './hello/hello';
import { FormsModule } from '@angular/forms';
import { LifeCycle } from './life-cycle/life-cycle';
import { CommonModule } from '@angular/common';
import { NgIfNgFor } from './ng-if-ng-for/ng-if-ng-for';
import { NgClassNgStyle } from './ng-class-ng-style/ng-class-ng-style';
import { Pipes } from './pipes/pipes';
import { CounterServiceComponent } from './counter-service/counter-service';
import { CounterService2Component } from './counter-service-2/counter-service-2';
import { AuthService } from './services/auth';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { TrackBy } from './track-by/track-by';
import { Post } from './post/post';
import { HttpLink } from '@apollo/client';

@Component({
  selector: 'app-root',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], // khai báo interceptor
  imports: [
    RouterOutlet,
    CommonModule,
    HelloComponet,
    FormsModule,
    LifeCycle,
    NgIfNgFor,
    NgClassNgStyle,
    Pipes,
    CounterServiceComponent,
    CounterService2Component,
    RouterModule,
    TrackBy,
    Post,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly appTitle = signal('App is running !');

  constructor(public authService: AuthService) {}

  // cha -> con
  parentMessage: string = 'Tiêu đề từ cha';

  // con -> cha
  childData: string = '';

  onNameChanged(newName: string) {
    this.childData = newName;
  }

  showLifeCycle: boolean = true;
  toggle() {
    this.showLifeCycle = !this.showLifeCycle;
  }
}
