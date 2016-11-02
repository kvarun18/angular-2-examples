import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Angular2RoutingModule } from './angular2-routing.module';
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
import { CustomPipesComponent , ShoutPipe } from './14-custom-pipes/custom-pipes.component';
import { AsyncComponent } from './15-async-pipes/async-pipes.component';
import { ChainingComponent } from './16-chaining-pipes/chaining-pipes.component';

@NgModule({
  imports: [
    SharedModule,
    Angular2RoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HelloWorldComponent,
    InterpolationComponent,
    EventsComponent,
    NgIfComponent,
    NgForComponent,
    StateComponent,
    ExternalFilesComponent,
    BasicComponent,
    BindingsComponent,
    InputsComponent,
    OutputsComponent,
    ClickAbleComponent,
    PipesComponent,
    PipesArgumentsComponent,
    CustomPipesComponent,
    ShoutPipe,
    AsyncComponent,
    ChainingComponent
  ],
})
export class Angular2Module { }
