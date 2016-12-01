import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'counter',
    template: require('./counter.component.html'),
   
    //Unless a reference changes, ignore change detection on this component.
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent{
    counter$: Observable<number>;

    constructor(
        private store : Store<number>
    ){
        /*
            Select returns an observable of the appropriate slice of state (reducer) from store.
            This is equivalent to store.map(state => state['counter']).distinctUntilChanged()
         */
        this.counter$ = this.store.select('counter')
    }

    /*
        The only way to modify state in store is through dispatched actions.
        Actions require a type (string) and optional payload.
        This type will match up to a case in one of your application reducers,
        specifying how this action will create a new representation
        of that particular section of state.
     */
    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }

    incrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'INCREMENT'});
        }, 1000);
    }

    decrementAsync(){
        setTimeout(() => {
            this.store.dispatch({type: 'DECREMENT'});
        }, 1000);
    }
}
