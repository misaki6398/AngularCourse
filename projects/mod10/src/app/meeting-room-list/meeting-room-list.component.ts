
import { ToastrService } from 'ngx-toastr';
import { MeetingRoomService } from './../shared/meeting-room.service';
import { Component, OnInit } from '@angular/core';
import { MeetingRoom } from '../shared/meeting-room';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meeting-room-list',
  templateUrl: './meeting-room-list.component.html',
  styleUrls: ['./meeting-room-list.component.scss']
})
export class MeetingRoomListComponent implements OnInit {

  constructor(public service: MeetingRoomService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getMeetingRooms().subscribe(response => {
      this.service.meetingRooms = response;
    });
  }

  public populateForm(meetingRoom: MeetingRoom): void {
    this.service.formData = Object.assign({}, meetingRoom);
  }

  deleteRecord(MeetingRoom: MeetingRoom) {
    if (confirm(`確定要刪除 會議室:${MeetingRoom.name}資料卡?`)) {
      this.service.deleteMeetingRoom(MeetingRoom.id).subscribe(response => {
        this.toastr.success('刪除成功', '會議室資料卡');
        this.service.getMeetingRooms().subscribe(res => {
          this.service.meetingRooms = res;
        });
      });
    }
  }

}
