import { Component } from '@angular/core';
export { HelloWorldComponent } from '../01-hello-world/hello-world.component';

@Component({
    templateUrl: './external-files.component.html',
    styleUrls: ['./external-files.component.css'],
})
export class ExternalFilesComponent { }
