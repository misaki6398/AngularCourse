import { MeetingRoomService } from './../meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../meeting-room';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.scss']
})
export class MeetingRoomListComponent implements OnInit {
  public meetingRooms: MeetingRoom[];
  constructor(private MeetingRoomService: MeetingRoomService) { }

  ngOnInit(): void {
    this.MeetingRoomService.getMeetingRooms().subscribe(response => {
      this.meetingRooms = response;
    });
  }

}
