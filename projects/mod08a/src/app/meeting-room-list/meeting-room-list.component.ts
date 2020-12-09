import { MeetingRoomService } from './../meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from 'projects/mod05/src/app/meeting-room';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.scss']
})
export class MeetingRoomListComponent implements OnInit {
  public meetingRooms: any;
  constructor(public service: MeetingRoomService) { }

  ngOnInit(): void {
    this.meetingRooms = this.service.getMeetingRooms();
  }

}
