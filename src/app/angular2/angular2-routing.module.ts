import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './01-hello-world/hello-world.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class Angular2RoutingModule { }
