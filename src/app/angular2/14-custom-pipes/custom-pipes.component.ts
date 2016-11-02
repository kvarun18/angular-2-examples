import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shout',
})
export class ShoutPipe implements PipeTransform {
    transform(value: string, doExclaim: boolean): string {
        const upper = value.toUpperCase();
        return doExclaim ? upper + '!' : upper;
    }
}

@Component({
    templateUrl: './custom-pipes.component.html',
})
export class CustomPipesComponent {
    text = 'hello world';
}
