import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {


  students: Array<Student> = [
    { Id: 101, Name: 'Mart', Birthday: new Date(2007, 3, 15) },
    { Id: 102, Name: 'Lisa', Birthday: new Date(2017, 11, 15) },
    { Id: 103, Name: 'Lisa', Birthday: new Date(2017, 0, 25) },
    { Id: 104, Name: 'Mard', Birthday: new Date(1987, 1, 15) },
    { Id: 105, Name: 'Mark', Birthday: new Date(2077, 1, 5) },
    { Id: 106, Name: 'Marq', Birthday: new Date(2007, 1, 11) },
    { Id: 107, Name: 'Marw', Birthday: new Date(2007, 1, 16) }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
