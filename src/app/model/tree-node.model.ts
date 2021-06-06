
export interface TreeNode<T extends TreeNode<T>> {
  id?: string;
  name?: string;
  children?: T[];
  parentId?: string;
  isOpened?: boolean;
  isActive?: boolean;
}
