import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import { HttpClient } from '@angular/common/http';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';


export interface Fruit{
  name:string;
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./user-registration.component.css'],
})

export class UserRegistrationComponent implements OnInit {
  closeResult!: string;
  faTimesCircle = faTimesCircle;
  // selectedFile = null;
  url = "../../../assets/1.jpg";

  constructor( private modalService:NgbModal ,private rregister:RegisterService, private router: Router) { }

 


  onFileSelected(event:any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

  onUpload(){

  }

  openLg(content:any){
    this.modalService.open(content, {size:'lg'});
  }

  ageValue:number=20;
  show:boolean=false;
  updateValue(event:any){
    this.ageValue = Math.round((event.value)/1000);
  }

  addOnBlur = true;
  separatorKeysCodes:number[] = [ENTER, COMMA];
  fruits: Fruit[]=[];

  add(event:MatChipInputEvent):void{
    const value = (event.value || '').trim();

    //Add
    if(value){
      this.fruits.push({name:value});
    }

    //Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit:Fruit):void{
    const index = this.fruits.indexOf(fruit);

    if(index >= 0){
      this.fruits.splice(index, 1);
    }
  }

  

  register = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z \-\]+')]),
    lastName : new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z \-\]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    age: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
    hobies: new FormControl(''),
    subscribe: new FormControl(''),
    image: new FormControl('')
  });

  get email(){return this.register.get('email')};
  get firstName(){
    return this.register.get('firstName')
  };
  get lastName(){
    return this.register.get('lastName')
  };

  ngOnInit(): void {
  }

  message:boolean = false;

  saveData(){
    // console.log(this.register.value);
    this.rregister.saveFormData(this.register.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
      this.register.reset({});
      this.router.navigateByUrl('/register-info');
    })
  }


}
