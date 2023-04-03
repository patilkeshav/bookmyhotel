import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit{
  parentForm=this.formBuilder.group({
  });
  secondFormGroup = this.formBuilder.group({    
  });
  isLinear =false;

  constructor(private formBuilder: FormBuilder) {}
 ngOnInit(): void {
   
 }
 bookHotel(){
  console.log(this.parentForm.value)
 }
}
