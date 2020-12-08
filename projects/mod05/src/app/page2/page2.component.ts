import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeetingRoom } from '../meeting-room';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  public meetingRoom: MeetingRoom;
  public capacity = ['5人', '10人', '15人', '20人', '25人'];
  public submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.meetingRoom = new MeetingRoom(
      101, '戈多滑', this.capacity[2], false, true
    );

  }

  onSubmit(roomForm: NgForm): void {
    if (roomForm.valid) {
      console.log(roomForm.value);
      this.submitted = true;
    }
  }

  newMeetingRoom(): void {
    this.meetingRoom = new MeetingRoom(102, '', '', false, false)
  }

}
