import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../../mod10/src/app/app.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: 'meetingroomapp', component: AppComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'booking/:id', component: BookingDetailComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
