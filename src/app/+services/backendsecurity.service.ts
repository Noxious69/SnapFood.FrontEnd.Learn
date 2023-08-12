import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Person } from '../~Models/Person';

@Injectable({
  providedIn: 'root'
})
export class BackendsecurityService extends BackendService  {

  person :Person = new Person()
  signin(username:string , password:string ){
   
    return this.http.post(this.securityAPI + 'signin' , {username:username , password:password})
  }
}
