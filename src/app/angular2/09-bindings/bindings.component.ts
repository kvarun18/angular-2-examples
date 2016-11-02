import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './bindings.component.html',
    styleUrls: ['./bindings.component.css'],
})
export class BindingsComponent {
    inputType: string = 'text';
    label: string = 'configurable';

    changeLabel(event) {
        this.label = event.target.value;
    }

    changeType(event) {
        this.inputType = event.target.value;
    }
}
