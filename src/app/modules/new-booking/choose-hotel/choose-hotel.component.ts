import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-choose-hotel',
  templateUrl: './choose-hotel.component.html',
  styleUrls: ['./choose-hotel.component.scss']
})
export class ChooseHotelComponent implements OnInit{
  getHotelsData:any;
  constructor(private http:HttpService){}
 ngOnInit(){
  this.getHotels()
 }

 getHotels(){
this.http.getDataFromServer("hotelList").subscribe((responce:any)=>{
 this.getHotelsData=responce
 console.log("hotels",this.getHotelsData)}
) 


 }
}
