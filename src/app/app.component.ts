import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


  @ViewChild('welcomeAnimation') 
  private animationEl: ElementRef;
  animationFinished: boolean;
  
  constructor() {}
  
  ngAfterViewInit() {
    this.animationEl.nativeElement.addEventListener('animationend', () => {
      this.animationFinished = true;
    });
  }

  
}
