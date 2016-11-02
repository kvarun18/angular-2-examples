import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './chaining-pipes.component.html',
})
export class ChainingComponent {
  mockServerRequest: Observable<number>;

  constructor() {
    this.mockServerRequest = Observable.create((o) => {
      setTimeout(() => o.next(13.12345), 120);
    });
  }
}
