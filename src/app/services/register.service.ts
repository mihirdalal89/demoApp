import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:5000/register';
  constructor(private http:HttpClient) { }
  saveFormData(data:any){
    // console.log(data);
    return this.http.post(this.url,data)
  }

  getFormData(){
    return this.http.get(this.url)
  }
}
