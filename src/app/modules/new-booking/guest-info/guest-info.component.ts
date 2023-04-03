import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-guest-info',
  templateUrl: './guest-info.component.html',
  styleUrls: ['./guest-info.component.scss']
})
export class GuestInfoComponent implements OnInit {
  guestForm!:FormGroup;
  parentForm!:FormGroup
  constructor(private fb:FormBuilder,private formContainer:FormGroupDirective){}
 ngOnInit(): void {
   this.createGuestForm();
   this.addGuest();
   this.parentForm=this.formContainer.form;
    if(this.parentForm){
      this.parentForm.addControl("geustForm",this.guestForm)
      
    }
 }
 createGuestForm(){
  this.guestForm=this.fb.group({
    "totalGuest":['',],
    "guests":this.fb.array([]),
  })
 }
 guest(){
  return this.fb.group({
  "customerName":"",
  "mobileNo":"",
  "dateOfBirth":"",
  "gender":"",
})
 }
 get guests(){
  return this.guestForm.get("guests") as FormArray;
 }

 addGuest(){
  this.guests.push(this.guest())
 }
 removeGuests(i:number){
this.guests.removeAt(i)
 }
 saveGuestInfo(){
  console.log(this.guestForm.value)
 }
}
