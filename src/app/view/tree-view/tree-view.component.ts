import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TreeNode} from '../../model/tree-node.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../../model/project.model';

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

  selectNode(node: TreeNode<any>): void {
    this.selectedNode = node;
    this.selectedNodeEvent.emit(node);
  }

  toggleChildNodes(node: TreeNode<any>): void {
    node.isOpened = !node.isOpened;
  }

  getTreeNodes(parentId?: string): Observable<any[]> {
    const url = `${this.sourceUrl}?parentId=${parentId ? parentId : 'null'}`;
    return this.http.get<any[]>(url);
  }
}
