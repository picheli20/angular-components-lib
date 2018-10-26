import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `
    <p>
      counter works!
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
