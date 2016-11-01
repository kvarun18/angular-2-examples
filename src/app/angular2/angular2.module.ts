import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Angular2RoutingModule } from './angular2-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [
    SharedModule,
    Angular2RoutingModule,
  ],
  declarations: [
    HelloWorldComponent],
})
export class Angular2Module { }
