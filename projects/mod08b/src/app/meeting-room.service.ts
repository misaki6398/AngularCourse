import { MeetingRoom } from './meeting-room';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public url = '../assets/meetingRoom.json'
  constructor(private httpClient: HttpClient) { }

  public getMeetingRooms(){
    return this.httpClient.get<MeetingRoom[]>(this.url);
  }
}
