import {Component, Input, OnInit} from '@angular/core';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {Attachment} from '../../model/attachment.model';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {

  @Input() attachment: Attachment;

  constructor() { }

  ngOnInit(): void {
  }

}
