import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingRoomListComponent } from './meeting-room-list/meeting-room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRoomListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
