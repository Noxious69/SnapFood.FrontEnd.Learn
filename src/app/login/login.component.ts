import { Component,} from '@angular/core';
import {Person} from '../~Models/Person';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { BackendsecurityService } from '../+services/backendsecurity.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
openModal() {
throw new Error('Method not implemented.');
}

  person: Person = new Person;

  constructor(private backend:BackendsecurityService , private router :Router) {}
  busy:boolean = false
  message:string = '';
   
  

  public check(){ 
    this.busy =true;   
    this.backend.signin(this.person.userName.toString() , this.person.loginpassword.toString()).subscribe(r=>
      {
        let result = r as any;
        if(result.isOk == false){
          this.message=(r as any).message;

        }
        else{
          sessionStorage.setItem('token' , result.token)
          switch (result.type) {
            case 'SystemAdmin':
              this.router.navigate(['/admins']);
              break;
          case 'RestaurantOwner':
            this.router.navigate(['/restaurants']);
            break;
          case 'Customer':
            this.router.navigate(['/customers']);
            break;
            
          }
        }
        this.busy = false;
        
      });
    }
  
}


  



  

