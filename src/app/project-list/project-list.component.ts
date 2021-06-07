import {Component, OnInit} from '@angular/core';
import {TreeNode} from '../model/tree-node.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  selectedProject: any;
  selectedProjectContentType = 'all';

  projectContentTypes = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Tasks',
      value: 'task'
    },
    {
      label: 'Notes',
      value: 'note'
    },
    {
      label: 'Attachments',
      value: 'attachment'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectProject(selectedProject: TreeNode<any>): void {
    this.selectedProject = selectedProject;
  }

}
