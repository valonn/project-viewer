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

  constructor() {
  }

  ngOnInit(): void {
  }

  selectProject(selectedProject: TreeNode<any>): void {
    this.selectedProject = selectedProject;
  }

}
