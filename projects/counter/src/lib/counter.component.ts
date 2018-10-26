import { Component } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent {
  counter = 0;

  increase() {
    this.counter++;
  }

}
