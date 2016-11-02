import { Component } from '@angular/core';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  label = 'randomize';
  randomString = randomString();
  onClick() {
      this.randomString = randomString();
  };
}

function randomString() {
  const length = (Math.floor(Math.random() * 25) + 10);
  let str = '';
  for (let i = 0; i < length; i += 1) {
      str += String.fromCharCode(Math.floor(Math.random() * 255))
  }
  return str;
}
