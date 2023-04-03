import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './modules/material/material.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CoreModule } from './modules/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';



@NgModule({
  declarations: [
    AppComponent,
    AllBookingsComponent,
    EditBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
