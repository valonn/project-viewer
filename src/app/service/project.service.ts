import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectService {

  private projectUrl = 'api/projects';
  private projectContentUrl = 'api/project_content';

  constructor(private http: HttpClient) {
  }

  getProjects(parentId?: string): Observable<Project[]> {
    const url = `${this.projectUrl}?parentId=${parentId ? parentId : 'null'}`;
    return this.http.get<Project[]>(url);
  }

  getProjectContent(projectId: string, type: string): Observable<any> {
    const url = `${this.projectContentUrl}?projectId=${projectId}` + (type && type !== 'all' ? `&type=${type}` : ``);
    return this.http.get<any>(url);
  }
}
