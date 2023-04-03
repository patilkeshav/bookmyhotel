import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/home/home.component';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'new-booking', loadChildren: () => import('./modules/new-booking/new-booking.module').then(m => m.NewBookingModule) },
  {path:'allbooking',component:AllBookingsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
