import { Directive, EventEmitter, OnInit} from '@angular/core';

@Directive({
  selector: 'appInterval',
  outputs: ['everySecond', 'fiveSecs: everyFiveSecs']
})
export class IntervalDirective implements OnInit {

  everySecond = new EventEmitter<string>();
  fiveSecs = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    setInterval(() => this.everySecond.emit('event'), 1000);
    setInterval(() => this.fiveSecs.emit('event'), 5000);
  }

}