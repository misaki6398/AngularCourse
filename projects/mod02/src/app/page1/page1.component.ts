import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  friends: Array<string> = ['Joe', 'No Joe', 'Kity', 'Linda'];

  constructor() { }

  ngOnInit(): void {
  }

  getVal(): number {
    return 10;
  }

}
