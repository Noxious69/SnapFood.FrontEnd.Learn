import { Component,  } from '@angular/core';
import {Person} from '../~Models/Person';
import { Router } from '@angular/router';
import { BackendsecurityService } from '../+services/backendsecurity.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  busy:boolean = false;
  person: Person = new Person();
  
  
  constructor(private backend:BackendsecurityService , private router:Router) {}
  public register(){    
    this.busy = true;

    this.backend.signup(this.person.userName??'' , this.person.password??'' , this.person.againpass??'' , this.person.boos??2 , this.person.fullName??'' , this.person.email??'', this.person.phone??'').subscribe(r=>
      {
        this.router.navigate(['/signin'])
      });
    }
    
    
 
  
    

 
}

