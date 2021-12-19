import { Component, OnInit } from '@angular/core';
import { ConfigService  } from '../service/config.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  dateNow = new Date();

  constructor(private service: ConfigService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.subscribeNextMissionData();
  }

  subscribeNextMissionData(){ 
    this.service.nextDate().subscribe((res) => {
      console.log(res)
    })
  }

}
