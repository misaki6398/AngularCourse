import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  selectedText: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event, element: string): void {
    console.log(element);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
  }

  onClick2(event: Event, element: string): void {
    console.log(element);
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
  }

  onChange(event: Event): void {
    const selectedElement: HTMLSelectElement = event.target as HTMLSelectElement;

    console.log(selectedElement.value);
  }

}
