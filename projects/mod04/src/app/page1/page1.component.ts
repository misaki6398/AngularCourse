import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  public picture = new Picture(
    'https://www.uuu.com.tw/Public/Content/edm/180921_brochure/img/Brochure201811_title.svg',
    '索取課程手冊',
    'UCOM'
  );

  isDisable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
