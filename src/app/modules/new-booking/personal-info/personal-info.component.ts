import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit{
  personalInformation!:FormGroup;
  parentForm!:FormGroup;
  countryList=[
    {value:"",viewValue:"select"},
    {value:"IND",viewValue:"India"},
    {value:"US",viewValue:"United State"},
    {value:"UK",viewValue:"United Kingdom"},

  ]


 constructor(private fb:FormBuilder,private formContainer:FormGroupDirective){}
  ngOnInit(): void {
   
    this. pesonalInfo()
    this.parentForm=this.formContainer.form;
  if(this.parentForm){
    this.parentForm.addControl("personalInformation",this.personalInformation)
    
  }
  }
  // ngAfterViewInit(): void {
    
  //   this.parentForm=this.formContainer.form;
  //   if(this.parentForm){
  //     this.parentForm.addControl("personalInformation",this.personalInformation)
  //   }
  // }
  pesonalInfo(){
    this.personalInformation=this.fb.group({
       "customerName":['',[Validators.required]],
       "country":['',[Validators.required]],
       "email":['',[Validators.required]],
       "dateOfBirth":['',[Validators.required]],
       "gender":['',[Validators.required]],
       "mobileNo":['',[Validators.required]],

    })
  }
  submitInfo(){
    console.log(this.personalInformation.value)
    
    // console.log(this.parentForm.value)
  }
}
