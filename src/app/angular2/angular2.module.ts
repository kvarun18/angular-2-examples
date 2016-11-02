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
    BasicComponent],
})
export class Angular2Module { }
