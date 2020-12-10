import { MeetingRoomService } from './../../../../mod10/src/app/shared/meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingRoom } from 'projects/mod10/src/app/shared/meeting-room';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  public id: number;
  public meetingRoom: MeetingRoom;

  constructor(public service: MeetingRoomService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.service.getMeetingRoomsById(this.id).subscribe(resp => {
      this.meetingRoom = resp;

    }, err => {
      // console.log(this.meetingRoom);
    });

  }



}
