import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('App init');
  }
  ngOnDestroy(): void {
    console.log('App destroy');
  }
}
