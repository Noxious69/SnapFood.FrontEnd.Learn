import { Component,  } from '@angular/core';
import {Person} from '../~Models/Person';
import { BackendsecurityService } from '../+services/backendsecurity.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  person: Person = new Person();
  
  constructor(private backend:BackendsecurityService) {}
  public check(){    
    this.backend.signin(this.person.userName.toString() , this.person.password.toString()).subscribe(r=>
      {
        console.log(JSON.stringify(r))
      });
    }
    
 
  
    

 
}

