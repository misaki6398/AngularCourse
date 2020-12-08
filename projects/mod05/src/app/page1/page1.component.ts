import { MeetingRoom } from './../meeting-room';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Key } from 'protractor';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  public meetingRoom: MeetingRoom;
  public capacity = ['5人', '10人', '15人', '20人', '25人'];
  public meetingRoomForm: FormGroup;

  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
    this.meetingRoom = new MeetingRoom(
      101, '戈多滑', this.capacity[2], false, true
    );


    console.log(this.meetingRoom);
    this.meetingRoomForm = this.builder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      size: [''],
      projector: [''],
      TV: [''],
    });

    this.meetingRoomForm.setValue(this.meetingRoom);
  }

  onSubmit(): void {
    console.log(this.meetingRoom);

    for (const key in this.meetingRoom) {
      if (Object.prototype.hasOwnProperty.call(this.meetingRoom, key)) {
        this.meetingRoom[key] = this.meetingRoomForm.get(key).value;
      }
    }

    console.log(this.meetingRoom);
  }
}
