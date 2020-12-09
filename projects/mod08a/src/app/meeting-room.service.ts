import { MeetingRooms } from './meeting-room';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  constructor() { }

  public getMeetingRooms(){
    return MeetingRooms;
  }
}
