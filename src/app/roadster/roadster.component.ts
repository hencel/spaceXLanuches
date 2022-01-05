import { Component, OnInit} from '@angular/core';
import { ConfigService } from '../service/config.service';
import { RoadsterData } from '../interface/interface';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.scss']
})
export class RoadsterComponent implements OnInit {
  data: RoadsterData = {
    details: '',
    earth_dist: 0,
    mars_dist: 0,
    name: '',
    speed_kph: 0,
    images: []
  };

  constructor(private service: ConfigService ) { }

  ngOnInit(): void {
    this.getRoadsterData();
  }

  getRoadsterData() { 
    let tempData: any;
    this.service.roadsterApi().subscribe((res) => {
      tempData = res;
      this.data.details = tempData.details;
      this.data.earth_dist = tempData.earth_distance_km;
      this.data.mars_dist = tempData.mars_distance_km;
      this.data.name = tempData.name;
      this.data.speed_kph = tempData.speed_kph;
      this.data.images = tempData.flickr_images;
    })
  }

  
}
