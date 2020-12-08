import { Component } from '@angular/core';
import { Picture } from 'projects/mod04/src/app/picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Property Binding';
  mySearch = '';
  isFoundText = false;
  isNoTouch = false;

  onTextChange(): void {
    this.isNoTouch = true;
  }

}
