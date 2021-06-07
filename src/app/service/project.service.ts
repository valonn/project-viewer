import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {ProjectContent} from '../model/project-content.model';

@Injectable({providedIn: 'root'})
export class ProjectService {

  private projectUrl = 'api/projects';
  private projectContentUrl = 'api/project-content';

  constructor(private http: HttpClient) {
  }

  /**
   * Gets project by id
   * @param id - project id
   */
  getProject(id: string): Observable<Project> {
    const url = `${this.projectUrl}?id=${id}`;
    return this.http.get<Project>(url);
  }

  /**
   *  Gets all projects by parent id, if no parent id is given then fetches all root projects
   * @param parentId - parent project id
   */
  getProjects(parentId?: string): Observable<Project[]> {
    const url = `${this.projectUrl}?parentId=${parentId ? parentId : 'null'}`;
    return this.http.get<Project[]>(url);
  }

  /**
   * Gets the project content
   * @param projectId - project id
   * @param type - project type
   */
  getProjectContent(projectId: string, type: string): Observable<ProjectContent[]> {
    const url = `${this.projectContentUrl}?projectId=${projectId}` + (type && type !== 'all' ? `&type=${type}` : ``);
    return this.http.get<ProjectContent[]>(url);
  }
}
