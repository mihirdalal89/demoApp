import { Component, OnInit, Input, Output } from '@angular/core';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  color!:string;

  @Output()
  message!:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
