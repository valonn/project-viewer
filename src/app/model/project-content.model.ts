
export interface ProjectContent {
  id?: string;
  name?: string;
  description?: string;
  text?: string;
  title?: string;
  status?: string;
  projectId?: string;
  assignee?: {
    name?: string
  };
  reporter?: {
    name?: string
  };
  url?: string;
  type: 'task' | 'note' | 'attachment';
  createdAt?: string;
}
