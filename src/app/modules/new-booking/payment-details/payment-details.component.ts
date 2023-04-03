import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],})
export class PaymentDetailsComponent implements OnInit{
  monthList=[
    {value:"",viewValue:"select"},
    {value:"Jan",viewValue:"January"},
    {value:"April",viewValue:"April"},
    {value:"July",viewValue:"July"},
    {value:"Oct",viewValue:"October"},

  ]
  yearList=[2022,2023,2024,2025,2026,2027
  ]
  paymentForm!:FormGroup;
  parentForm!:FormGroup;
  @Input()
  stepper!: MatStepper;
  constructor(private fb:FormBuilder,private formContainer:FormGroupDirective,private http:HttpService){}
 ngOnInit(){
  this.CreatePaymentFrom();
  this.parentForm=this.formContainer.form;
  if(this.parentForm){
    this.parentForm.addControl("paymentForm",this.paymentForm)
    
  }
  console.log(this.stepper.next())
 }

 CreatePaymentFrom(){
  this.paymentForm=this.fb.group({
    "name":['',[Validators.required]],
    "debitCardNumber":['',[Validators.required]],
    "expirymonth":['',[Validators.required]],
    "expiryYear":['',[Validators.required]],
    "SecurityCode":['',[Validators.required]]
  })
 }
 SavePaymentForm(){
  console.log(this.paymentForm.value)
 }
 confirmPayment(){
  const data=this.parentForm.value;
  this.http.postDataToserver("hotelBookings",data).subscribe((el:any)=>{
    if(el){
      this.stepper.next()
    }
  }
  ,
    error=>{})
 }
} 
