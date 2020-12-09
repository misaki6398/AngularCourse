import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-detail',
  templateUrl: './meeting-room-detail.component.html',
  styleUrls: ['./meeting-room-detail.component.scss']
})
export class MeetingRoomDetailComponent implements OnInit {
  public capacitys: any[] = [
    { value: 5, text: '5人' },
    { value: 10, text: '10人' },
    { value: 15, text: '15人' },
    { value: 20, text: '20人' },
    { value: 25, text: '25人' },
    { value: 30, text: '30人' },
    { value: 40, text: '40人' },
    { value: 50, text: '50人' },
    { value: 100, text: '100人' },
    { value: 200, text: '200人' }
  ];


  constructor(public service: MeetingRoomService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  onSizeChange(event) {
    this.service.formData.size = parseInt(event);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
    this.service.formData = {
      id: 0,
      name: '',
      size: -1,
      projector: false,
      TV: false
    }
  }

  insertRecord(form: NgForm) {
    this.service.postMeetingRoom().subscribe(response => {
      this.resetForm(form);
      this.toastr.success('新增成功', '會議室資料卡');
      this.service.getMeetingRooms().subscribe(res => {
        this.service.meetingRooms = res;
      });
    });
  }

  updateRecord(form: NgForm) {
    this.service.putMeetingRoom().subscribe(response => {
      this.resetForm(form);
      this.toastr.info('更新成功', '會議室資料卡');
      this.service.getMeetingRooms().subscribe(res => {
        this.service.meetingRooms = res;
      });
    });
  }

  onSubmit(form: NgForm) {
    this.service.formData.size = Number(this.service.formData.size);
    if (this.service.formData.id === 0 || this.service.formData.id === undefined) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

}
