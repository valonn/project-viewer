import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TreeNode} from '../../model/tree-node.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() icon: string;
  @Input() selectedNode: TreeNode<any>;
  @Input() parenNode: TreeNode<any>;
  @Input() sourceUrl: string;
  @Output() selectedNodeEvent = new EventEmitter<TreeNode<any>>();

  loading: boolean;
  treeNodes: TreeNode<any>[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.getTreeNodes(this.parenNode?.id).subscribe(nodes => {
      this.treeNodes = nodes;
      if (this.parenNode) {
        this.parenNode.children = nodes;
      }
      this.loading = false;
    });
  }

  /**
   * Selects a node and emits that value
   * @param node - tree node
   */
  selectNode(node: TreeNode<any>): void {
    this.selectedNode = node;
    this.selectedNodeEvent.emit(node);
  }

  /**
   * Toggles child nodes
   * @param node - tree node
   */
  toggleChildNodes(node: TreeNode<any>): void {
    node.isOpened = !node.isOpened;
  }

  /**
   * Gets all tree nodes by parent id, if parent id is not given then fetches root nodes
   * @param parentId - parent id
   */
  getTreeNodes(parentId?: string): Observable<any[]> {
    const url = `${this.sourceUrl}?parentId=${parentId ? parentId : 'null'}`;
    return this.http.get<any[]>(url);
  }
}
