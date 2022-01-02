import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  nextUrl:string = 'https://api.spacexdata.com/v4/launches/next';
  roadsterUrl: string = 'https://api.spacexdata.com/v3/roadster';

  nextDate() {
    return this.http.get(this.nextUrl)
  }

  roadsterApi() {
    return this.http.get(this.roadsterUrl)
  }

}