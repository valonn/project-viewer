import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project} from '../../model/project.model';
import {ProjectService} from '../../service/project.service';

@Component({
  selector: 'app-project-list-content',
  templateUrl: './project-list-content.component.html',
  styleUrls: ['./project-list-content.component.css']
})
export class ProjectListContentComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Input() project: Project;

  content: any;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  loadProjectContent(projectId: string, type: string): void {
    this.projectService.getProjectContent(projectId, type).subscribe(content => {
      this.content = content;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.project || changes.type) {
      this.loadProjectContent(this.project?.id, this.type);
    }
  }

}
