import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaveEvent } from '../models/leave-event';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  getAllLeaves() {
    return this.http.get<LeaveEvent[]>('./assets/data/events.json');
  }

}
