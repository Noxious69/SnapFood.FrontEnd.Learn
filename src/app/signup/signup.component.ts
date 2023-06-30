import { Component, Injectable, Input } from '@angular/core';
import {Person} from '../~Models/Person';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  person: Person = new Person();

 
}
