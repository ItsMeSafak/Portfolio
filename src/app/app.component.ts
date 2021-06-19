import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100%'
      })),
      state('closed', style({
        height: '0%'
      })),
      transition('open => closed', [
        animate('2s')
      ])
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  animationFinished: boolean;
  
  constructor() {}
  
  ngAfterViewInit() {
  }

  
}
