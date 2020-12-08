import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component implements OnInit {

  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter<string>();
 isFound = false;

  constructor() { }

  textArray = ['test', '安安你好', '這是搜尋練習', 'search', '搜尋一下'];

  ngOnInit(): void {
  }

  onSearch(search: string): void {
    this.searchText = search;
    console.log(this.searchText);
    this.searchTextChange.emit(this.searchText);
    this.isFound = (this.textArray.find(c => c === search) === undefined) ? false : true;
  }



}
