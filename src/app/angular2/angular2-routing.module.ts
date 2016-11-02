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
import { BindingsComponent } from './09-bindings/bindings.component';
import { InputsComponent } from './10-inputs/inputs.component';
import { OutputsComponent } from './11-outputs/outputs.component';
import { ClickAbleComponent } from './17-clickable/clickable.component';
import { PipesComponent } from './12-pipes/pipes.component';
import { PipesArgumentsComponent } from './13-pipes-arguments/pipes-arguments.component';
import { CustomPipesComponent, ShoutPipe } from './14-custom-pipes/custom-pipes.component';
import { AsyncComponent } from './15-async-pipes/async-pipes.component';
import { ChainingComponent } from './16-chaining-pipes/chaining-pipes.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: '02-interpolation', component: InterpolationComponent },
  { path: '03-events', component: EventsComponent },
  { path: '04-ng-if', component: NgIfComponent },
  { path: '05-ng-for', component: NgForComponent },
  { path: '06-state-has-no-place-in-components', component: StateComponent },
  { path: '07-external-files', component: ExternalFilesComponent },
  { path: '08-basic-component-summary', component: BasicComponent },
  { path: '09-bindings', component: BindingsComponent },
  { path: '10-inputs', component: InputsComponent },
  { path: '11-outputs', component: OutputsComponent },
  { path: '12-pipes', component: PipesComponent },
  { path: '13-pipes-arguments', component: PipesArgumentsComponent },
  { path: '14-custom-pipes', component: CustomPipesComponent },
  { path: '15-async-pipes', component: AsyncComponent },
  { path: '16-chaining-pipes', component: ChainingComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class Angular2RoutingModule { }
