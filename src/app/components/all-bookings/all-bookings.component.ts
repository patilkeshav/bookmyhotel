import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';
import { EditBookingComponent } from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.scss']
})
export class AllBookingsComponent implements OnInit {
  displayedColumns: string[] = ['edit','customerName', 'checkInDate','mobileNo', 'gender',];
  hotelBookingData:any=[];
  dataSource:any=[];

  constructor(private http:HttpService ,private dialog:MatDialog){}
  ngOnInit(){
    this.http.getDataFromServer("hotelBookings").subscribe((responce:any)=>{
    this.hotelBookingData=responce
    this.dataSource = new MatTableDataSource(this.hotelBookingData)
  },
   error=>{})
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(booking:any){
    let dialogConfig=new MatDialogConfig();
    dialogConfig.width="400px"
    dialogConfig.data=booking;
  const dialogRef= this.dialog.open(EditBookingComponent,dialogConfig);
  dialogRef.afterClosed().subscribe((result:any)=>{
    console.log("data received from dialogBox",result)
  })
  }
}
