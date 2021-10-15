import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { Duration, Moment } from 'moment';

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
export class AppComponent implements OnInit {

  animationFinished: boolean;
  countDown: string;
  finalDay: Moment = moment('2022-01-23 00:00:00');
  
  constructor() {}
  
  ngOnInit() {
    this.countDown = this.calculateDate();
    setInterval(() => {
      this.countDown = this.calculateDate();
    }, 1000);
  }

  calculateDate() {
    const now = moment(Date.now());
    const diff = moment.duration(this.finalDay.diff(now, 'seconds'), 'seconds').asMilliseconds()
    return moment.utc(diff).format('DDD : hh : mm : ss');
  }

  
}
