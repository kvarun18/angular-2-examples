import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './async-pipes.component.html',
})
export class AsyncComponent {
    mockServerRequest: Observable<string>;

    constructor() {
        this.mockServerRequest = Observable.create((o) => {
            setTimeout(() => o.next('Request eventually resolves'), 2000);
        });
    }
}
