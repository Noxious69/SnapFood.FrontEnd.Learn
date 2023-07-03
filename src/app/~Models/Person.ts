import { FormControl, Validators } from "@angular/forms";
import { EmptyError } from "rxjs";

export class Person {
    
   
       userName :string = '' ;
       password :string = '' ;
       fullName:string = '';
       email:string = '';
       nameOfResturant:string = '';
       experience:number = 0;
       phone:string = '';
       boos:boolean = false;

       usermessage:string = '' ;
       usermessage2:string = '' ;
       passmessage:string = '' ;
       namemessage:string = '' ;
       emailmessage:string = '' ;
       phonemessage:string = '' ;
   
       public clear(){
         this.userName = '' ;
         this.password = '';
         this.usermessage = '';
         this.passmessage = '';
         this.email = '';
         this.phone = '';
         this.nameOfResturant = '';
         this.experience = 0;
         this.boos = false;
         console.clear();
       }
       public invalidName(){
        if (this.fullName == '') {
          this.namemessage = 'asfkdkfsdkf'
        } else{
          this.namemessage = ''
        }
        return this.namemessage ;
       }
       
      public invalidUser(){
        if ( this.userName == '' ) {
          this.usermessage = 'username is required' ;
        } else {
          this.usermessage = '' ; 
        }
        
        return  this.usermessage 
       }

      public invalidPass(){
        if (this.password == '') {
          this.passmessage = 'pasword is required' ;
         } else {
          this.passmessage = '' ;
        };
        return this.passmessage;
      }
      
      public invalidEmail(){
        if (this.email == '') {
          this.passmessage = 'email is required' ;
         } else {
          this.passmessage = '' ;
        };
        return this.passmessage;
      }
      
      public invalidPhone(){
        if (this.phone == '') {
          this.phonemessage = 'phone is required' ;
         } else {
          this.phonemessage = '' ;
        };
        return this.phonemessage;
      }



      keyWord(e:KeyboardEvent){
        // var letters = [0-9]
        // if (letters) {
        //   e.preventDefault()
        // }
        if (e.key>='0' && e.key<='9'){
          e.preventDefault();
        }
      }

      keyNumber(e:KeyboardEvent){
        var letters = /^[a-zA-Z]+$/;
        
        if (!letters){
          e.preventDefault()
        }
        
      }
  }


