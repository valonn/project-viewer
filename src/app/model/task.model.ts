import {ProjectContent} from './project-content.model';

export interface Task extends ProjectContent {
  name?: string;
  description?: string;
  title?: string;
  status?: string;
  assignee?: {
    name?: string
  };
  reporter?: {
    name?: string
  };
}
