import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  editBookingForm!:FormGroup;
  constructor(private fb:FormBuilder,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any,private http:HttpService,public dialogRef: MatDialogRef<EditBookingComponent>){
    console.log("data",data)
  }
  ngOnInit(): void {
     this.editBookingForm=this.fb.group({
      "checkInDate":[''],
      "checkOutDate":[''],
     })
     this.setBookingDetails();
  }
  setBookingDetails(){
    this.editBookingForm.get("checkInDate")?.setValue(this.data.searchHotel.checkInDate);
    this.editBookingForm.get("checkOutDate")?.setValue(this.data.searchHotel.checkOutDate);
  }
  cancle(){
    this.dialogRef.close()
  }
  save(){
  this.data.searchHotel.checkInDate=this.editBookingForm.value.checkInDate;
  this.data.searchHotel.checkOutDate=this.editBookingForm.value.checkOutDate;
  const endpoint:string="hotelBookings/"+this.data.id;
  this.http.putDataToserver(endpoint,this.data).subscribe((responce:any)=>{
    if(responce){
      this.dialogRef.close({booking:this.data});
      console.log(responce)
    } 
  })
  }
}
