import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchHotelsComponent } from './search-hotels/search-hotels.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { FinishBookingComponent } from './finish-booking/finish-booking.component';



@NgModule({
  declarations: [
    NewBookingComponent,
    SearchHotelsComponent,
    ChooseHotelComponent,
    PersonalInfoComponent,
    PaymentDetailsComponent,
    GuestInfoComponent,
    ChooseRoomComponent,
    FinishBookingComponent,
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[NewBookingComponent]
})
export class NewBookingModule { }
