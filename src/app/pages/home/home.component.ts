import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullpage_api: any;
  config: any;

    constructor() {
    }

    ngOnInit() {  
      this.config = {
        navigation: true,
      };
    }

    getRef(fullPageRef: any) {
      this.fullpage_api = fullPageRef;
    }

}
