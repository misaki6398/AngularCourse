import { MeetingRoomService } from './../../../../mod10/src/app/shared/meeting-room.service';

import { MeetingRoom } from './../../../../mod10/src/app/shared/meeting-room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  meetingRooms: MeetingRoom[];
  constructor(public service: MeetingRoomService, public router: Router) { }

  ngOnInit(): void {
    this.service.getMeetingRooms().subscribe(resp => {
      this.meetingRooms = resp;
    });
  }

  onSelect(id): void {
    this.router.navigate(['/booking/' + id]);
  }

}
