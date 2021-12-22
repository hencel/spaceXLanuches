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

  dateNow: string = '';
  timeNow: string = '';
  subscribedData: apiData = {date_utc: '', name: ''};
  dateMision: string = '';
  timeMision: string = '';

  constructor(private service: ConfigService, private datePipe: DatePipe) {
    this.service = service;
  }

  ngOnInit() {
    this.subscribeNextMissionData();
    this.transformDate()
  }

  subscribeNextMissionData() { 
    let tempData: any;
    this.service.nextDate().subscribe((res) => {
      tempData =  res;
      this.subscribedData = {date_utc: tempData.date_utc, name: tempData.name};
      this.dateMision = this.subscribedData.date_utc.substring(0, this.subscribedData.date_utc.indexOf('T'));
      this.timeMision = this.subscribedData.date_utc.substring(this.subscribedData.date_utc.indexOf('T')+1, this.subscribedData.date_utc.indexOf('.'));
    })
  }

  transformDate() {
    const currentDate = new Date();
    this.dateNow = this.datePipe.transform(currentDate, 'yyyy-MM-dd') as string;
    this.timeNow = this.datePipe.transform(currentDate, 'h:mm:ss') as string;
  }

}
