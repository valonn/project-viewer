import {Component, Input, OnInit} from '@angular/core';
import {ProjectContent} from '../../model/project-content.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: ProjectContent;

  constructor() { }

  ngOnInit(): void {
  }

}
