import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeViewComponent} from './tree-view/tree-view.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { NoteComponent } from './note/note.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [TreeViewComponent, AttachmentComponent, NoteComponent, ContentCardComponent, TaskComponent],
    exports: [TreeViewComponent, AttachmentComponent, NoteComponent, ContentCardComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
