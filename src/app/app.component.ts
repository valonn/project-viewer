import {Component} from '@angular/core';
import {TreeNode} from './model/tree-node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project-viewer';

  theme = 'dark_mode';

  toggleTheme(): void {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : 'dark');
    this.theme = theme === 'dark' ? 'dark_mode' : 'light_mode';
  }

  goToProject($event: TreeNode<any>): void {
    console.log($event);
  }
}
