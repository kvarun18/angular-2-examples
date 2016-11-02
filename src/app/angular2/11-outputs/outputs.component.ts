import { Component } from '@angular/core';
export { ClickAbleComponent } from '../17-clickable/clickable.component';

@Component({
    moduleId: module.id,
    templateUrl: './outputs.component.html',
})
export class OutputsComponent {
    output: string = '';
    onAction(data) {
        this.output += data + ' ';
    }
}
