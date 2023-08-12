import { Component,} from '@angular/core';
import {Person} from '../~Models/Person'
import { BackendsecurityService } from '../+services/backendsecurity.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  person: Person = new Person;

  constructor(private backend:BackendsecurityService) {}
  public check(){    
    this.backend.signin(this.person.userName.toString() , this.person.password.toString()).subscribe(r=>
      {
        console.log(JSON.stringify(r))
      });
    }
  
}


  



  

