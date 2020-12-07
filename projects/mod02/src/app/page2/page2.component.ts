import { Picture } from './../picture';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  public picture = new Picture(
    'https://www.uuu.com.tw/Public/Content/edm/180921_brochure/img/Brochure201811_title.svg',
    '索取課程手冊',
    'UCOM'
  );

  constructor() { }

  ngOnInit(): void {

  }

}
