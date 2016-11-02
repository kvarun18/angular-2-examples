import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
    public greeting: string = 'Hello, world!';
    constructor() { }
}
