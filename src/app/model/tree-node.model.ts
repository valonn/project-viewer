
export interface TreeNode<T extends TreeNode<T>> {
  id: string;
  name?: string;
  children?: T[];
  // Had to use parent id and not the generic type because of the mock api, it should be parent: T
  parentId?: string;
  isOpened?: boolean;
  isActive?: boolean;
}
