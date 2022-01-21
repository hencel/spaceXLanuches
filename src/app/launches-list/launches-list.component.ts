import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent implements OnInit {
  launchesUrl: string = 'https://api.spacexdata.com/v3/launches';
  datas: any;

  constructor(private service: ConfigService) { }

  ngOnInit(): void {
    this.getLaunchesData();
  }

  getLaunchesData() {
    // let tempData:any;
    this.service.serviceApi(this.launchesUrl).subscribe((res) => {
      this.datas = res;
    })
  }
}
