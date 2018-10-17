import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hnge-layout',
  template: `
    <hnge-main-header></hnge-main-header>
    <hnge-main-content></hnge-main-content>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
