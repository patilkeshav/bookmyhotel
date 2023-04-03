import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.component.html',
  styleUrls: ['./choose-room.component.scss']
})
export class ChooseRoomComponent implements OnInit{
chooseRoom!:FormGroup;
options: string[] = ['singleRoom', 'Double Room with balcony','King room with pool view'];
filteredOptions!:Observable<string[]>;
  constructor(private fb:FormBuilder){}
 ngOnInit(): void {

  this.createFormForRoom();}
  
 createFormForRoom(){
  this.chooseRoom=this.fb.group({
    "roomType":[''],
    "noOfRooms":[''],
    "price":[''],
    "totalPrice":[''],
    "Ac/NonAc":['']
  })
 }
 saveForm(){
  console.log(this.chooseRoom.value)
 }
}
