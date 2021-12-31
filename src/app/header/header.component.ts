import { Component } from '@angular/core';
import { HeaderListItem } from '../interface/interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listHeaderItems: HeaderListItem[] = [
    {link: 'counter', title: 'Counter'},
    {link: 'launchesList', title: 'Launches List'},
    {link: 'roadster', title: 'Roadster'}
  ];
  title: string = 'Launch counter'

}
