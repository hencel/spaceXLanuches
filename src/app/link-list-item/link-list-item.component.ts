import { Component, Input } from '@angular/core';
import { HeaderListItem } from '../interface/interface';

@Component({
  selector: 'app-link-list-item',
  templateUrl: './link-list-item.component.html',
  styleUrls: ['./link-list-item.component.scss']
})
export class LinkListItemComponent {
  @Input() headerList:HeaderListItem[] = [];
}
