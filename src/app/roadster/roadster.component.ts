import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.scss']
})
export class RoadsterComponent implements OnInit {

  constructor(private service: ConfigService ) { }

  ngOnInit(): void {
    this.getRoadsterData();
  }

  getRoadsterData() { 
    let tempData: any;
    this.service.roadsterApi().subscribe((res) => {
      tempData = res;
      
    })
  }
}
