import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{
CounterComponent 
} from './counter'

const routes: Routes = [
    {
        path : 'redux/counter',
        component : CounterComponent 
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class ReduxRoutingModule {}


