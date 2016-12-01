import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ReduxRoutingModule} from './redux.routes'
import { Store, StoreModule } from '@ngrx/store';
import {CounterComponent} from './counter/components/counter.component'
import { counter} from './counter/reducers/counter'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReduxRoutingModule,
     StoreModule.provideStore({ counter: counter })
  ],
  declarations: [
    CounterComponent
  ],
  providers: [],
})
export class ReduxModule { }
