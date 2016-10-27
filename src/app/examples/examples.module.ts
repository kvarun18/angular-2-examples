import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExamplesRoutingModule } from './examples-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
  ],
  declarations: [
    HelloWorldComponent],
})
export class ExamplesModule { }
