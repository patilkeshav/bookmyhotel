import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBookingComponent } from './new-booking.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';

const routes: Routes = [
  { path:'', component:NewBookingComponent},
  {path:'choose-room',component:ChooseRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBookingRoutingModule { }
