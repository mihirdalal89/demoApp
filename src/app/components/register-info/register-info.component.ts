import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {

  constructor(private register:RegisterService) { }
  data:any = []
  studentData:any=[]
  ngOnInit(): void {
    this.register.getFormData().subscribe((allData)=>{
      // console.log(allData)
      this.studentData = allData
      this.data=this.studentData[this.studentData.length-1] 
      console.log(this.data)
    })
  }

}
