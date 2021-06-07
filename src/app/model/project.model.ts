import {TreeNode} from './tree-node.model';

export interface Project extends TreeNode<Project> {
  id: string;
  name?: string;
  description?: string;
  createdAt?: string;
}
