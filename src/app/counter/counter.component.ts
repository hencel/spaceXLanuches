import { Component, OnInit } from '@angular/core';
import { ConfigService  } from '../service/config.service';
import { apiData } from '../interface/interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  subscribedData: apiData = {date_utc: '', name: ''};
  currentDate: Date = new Date();
  missionDate: Date = new Date();
  distance: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  counterState: boolean = false;

  constructor(private service: ConfigService, private datePipe: DatePipe) {
    this.service = service;
  }

  ngOnInit() {
    this.subscribeNextMissionData();
  }

  subscribeNextMissionData() { 
    let tempData: any;
    this.service.nextDate().subscribe((res) => {
      tempData =  res;
      this.subscribedData = {date_utc: tempData.date_utc, name: tempData.name};
      this.missionDate = new Date(tempData.date_utc);
      this.makeCounter(this.missionDate);
    })
  }

  makeCounter(finish:Date) {
    
    const timer = setInterval(() => {
      const date = new Date();
      const now_utc =  new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

      let startDate: number = now_utc.getTime();
      let finishDate: number = finish.getTime();
      let distance = finishDate - startDate;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (this.counterState != true) {
        this.counterState = true;
      }

    }, 1000);
  }

}
