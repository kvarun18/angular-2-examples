import { Component } from '@angular/core';

@Component({
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
    list = [
        { id: 0, value: 'zero the hero' },
        { id: 1, value: 'first the worst' },
        { id: 2, value: 'second the best' },
        { id: 3, value: 'third the nerd' },
        { id: 4, value: 'fourth is a lowly composite' },
    ];
}
