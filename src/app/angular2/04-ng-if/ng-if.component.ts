import { Component } from '@angular/core';

@Component({
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  label = 'show';
  someString = 'What if you could conditionally show components?';
  onClick() {
      if (this.label === 'show') {
        this.label = 'hide';
      } else {
        this.label = 'show';
      }
  };
}
