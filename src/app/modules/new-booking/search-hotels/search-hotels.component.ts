import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { debounceTime, filter, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.scss']
})
export class SearchHotelsComponent implements OnInit {
  searchHotel!:FormGroup;
  parentForm!:FormGroup;
  options: string[] = ['pune', 'mumbai', 'nashik','Nagpur'];
  filteredOptions!: Observable<string[]>;

  constructor(private fb:FormBuilder,private formContainer:FormGroupDirective,private http:HttpService){}
  ngOnInit(): void {
    this.createForm();
    this.parentForm=this.formContainer.form;
    if(this.parentForm){
      this.parentForm.addControl("searchHotel",this.searchHotel)
      
    }
    this.filteredOptions = this.searchHotel.controls['city'].valueChanges.pipe(
      debounceTime(2000),
      startWith(''),
      map(value => this._filter(value || '')),
    );

    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  createForm(): void{
    this.searchHotel=this.fb.group({
      "city":['',[Validators.required]],
      "checkInDate":['',[Validators.required]],
      "checkOutDate":['',[Validators.required]],
      "adults":[1,[Validators.required]],
      "children":[1,[Validators.required]]
    })
  }
  saveForm(){
    console.log(this.searchHotel.value)
    console.log(this.parentForm.value)
  }

  adultsChange(type:any){
if(type=='Increment'){
  this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value + 1)
}
else{
  this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value - 1)
}
  }
  childrenChange(type:any){
    if(type=='Increment'){
       this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value + 1)
    }
    else{
      this.searchHotel.controls['children'].setValue(this.searchHotel.controls['children'].value - 1)
    }
  }
}
