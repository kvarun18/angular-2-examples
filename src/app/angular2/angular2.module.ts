import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Angular2RoutingModule } from './angular2-routing.module';
import { HelloWorldComponent } from './01-hello-world/hello-world.component';

@NgModule({
  imports: [
    SharedModule,
    Angular2RoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HelloWorldComponent],
})
export class Angular2Module { }
