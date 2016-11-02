import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'click-able',
    templateUrl: './clickable.component.html',
})
export class ClickAbleComponent {
    @Output() action = new EventEmitter<string>();
    text: string = '';
    changeText(event) {
        this.text = event.target.value;
    }
}
