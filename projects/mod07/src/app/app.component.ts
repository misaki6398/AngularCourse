import { RenterInfo } from './renter-info';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rentRoom: any = {};
  capacitys = ['5人', '10人', '15人', '20人', '25人', '30人', '35人'];
  title = 'mod07';


}
