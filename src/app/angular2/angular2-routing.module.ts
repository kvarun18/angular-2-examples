import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './01-hello-world/hello-world.component';
import { InterpolationComponent } from './02-interpolation/interpolation.component';
import { EventsComponent } from './03-events/events.component';
import { NgIfComponent } from './04-ng-if/ng-if.component';
import { NgForComponent } from './05-ng-for/ng-for.component';
import { StateComponent } from './06-state-has-no-place-in-components/state.component';
import { ExternalFilesComponent } from './07-external-files/external-files.component';
import { BasicComponent } from './08-basic-component-summary/basic.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: '02-interpolation', component: InterpolationComponent },
  { path: '03-events', component: EventsComponent },
  { path: '04-ng-if', component: NgIfComponent },
  { path: '05-ng-for', component: NgForComponent },
  { path: '06-state-has-no-place-in-components', component: StateComponent },
  { path: '07-external-files', component: ExternalFilesComponent },
   { path: '08-basic-component-summary', component: BasicComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class Angular2RoutingModule { }
