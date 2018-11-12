import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hnge-main-content',
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
