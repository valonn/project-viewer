import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewModule} from '../view/view.module';
import {ProjectComponent} from './project.component';
import {ProjectContentComponent} from './project-content/project-content.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectContentComponent
  ],
  exports: [
    ProjectContentComponent
  ],
  imports: [
    ViewModule,
    RouterModule,
    CommonModule
  ]
})
export class ProjectModule { }
