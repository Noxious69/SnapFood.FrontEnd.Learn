import { Component, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {Person} from '../~Models/Person'
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  person : Person = new Person
  check(){
    console.log(this.person);
  }
  


  
  
}


  

