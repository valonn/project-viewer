import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectListContentComponent} from './project-list-content/project-list-content.component';
import {ProjectListComponent} from './project-list.component';
import {ViewModule} from '../view/view.module';


@NgModule({
  declarations: [ProjectListContentComponent, ProjectListComponent],
  exports: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ViewModule
  ]
})
export class ProjectListModule {
}
