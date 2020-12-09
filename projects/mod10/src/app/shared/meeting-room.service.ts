import { MeetingRoom } from './meeting-room';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  public rootUrl = 'https://localhost:44360/api/MeetingRooms/';

  public formData: any = {
    id: 0,
    name: '',
    size: -1,
    projector: false,
    TV: false
  }
  public meetingRooms;
  constructor(private httpClient: HttpClient) { }

  public getMeetingRooms() {
    return this.httpClient.get<MeetingRoom[]>(this.rootUrl);
  }

  public getMeetingRoomsById(id) {
    return this.httpClient.get<MeetingRoom[]>(`${this.rootUrl}${id}`);
  }

  public postMeetingRoom() {
    return this.httpClient.post(this.rootUrl, this.formData);
  }

  public putMeetingRoom() {
    return this.httpClient.put(`${this.rootUrl}${this.formData.id}`, this.formData);
  }

  public deleteMeetingRoom(id) {
    return this.httpClient.delete(`${this.rootUrl}${id}`);
  }

}
