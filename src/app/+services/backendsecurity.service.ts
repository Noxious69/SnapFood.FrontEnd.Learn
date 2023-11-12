import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Person } from '../~Models/Person';

@Injectable({
  providedIn: 'root'
})
export class BackendsecurityService extends BackendService  {

  person :Person = new Person()
  signin(username:string , password:string ){
   
    return this.http.post(this.securityAPI + 'signin' , {username:username , password:password })
  }
    
  signup(username:string , password:string ,returnpassword:string , type:number , fullname:string , email:string , phone:string ){
    return this.http.post(this.securityAPI + 'signup' , 
    {
      username : username,
      password:password,
      returnpassword:returnpassword,
      type:type,
      fullname:fullname,
      email:email,
      phone:phone,
    })
  }
}
