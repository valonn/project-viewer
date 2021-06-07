import {ProjectContent} from './project-content.model';

export interface Attachment extends ProjectContent {
  description?: string;
  url?: string;
}
