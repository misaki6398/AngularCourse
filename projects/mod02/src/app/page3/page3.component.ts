import { Picture } from './../picture';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  title = '山豬大賣場';

  pictures: Array<Picture> = [
    new Picture(
      'https://images.chinatimes.com/newsphoto/2020-08-11/1024/20200811003263.jpg',
      '山豬',
      '台南豬肉湯'
    ),
    new Picture(
      'https://img.ltn.com.tw/Upload/news/600/2019/04/02/2747013_1.jpg',
      '山豬2',
      '嘉義大肥豬'
    ),
    new Picture(
      'https://www.merit-times.com.tw/news_pic/20190120/1155028_826866.jpg',
      '山豬3',
      '屏東豬豬世界'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
