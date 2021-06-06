import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {

  @Input() attachment;

  constructor() { }

  ngOnInit(): void {
  }

}
