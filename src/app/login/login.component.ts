import { Component, Input, Output, QueryList } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {Person} from '../~Models/Person'
import {Validator, FormControl, FormGroup, Validators } from '@angular/forms';



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


  



  

