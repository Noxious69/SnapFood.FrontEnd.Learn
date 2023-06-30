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

       message:string = '' ;
       passmessage:string = '' ;
   
       public clear(){
         this.userName = '' ;
         this.password = '';
         this.message = '';
         this.passmessage = '';
         this.email = '';
         this.phone = '';
         this.nameOfResturant = '';
         this.experience = 0;
         this.boos = false;
         console.clear();
       }
     
      invalid(): true | any{
        if ( this.userName == '' ) {
          this.message = 'username is required' ;
        } else {
          this.message = '' ;
        };
        
       if (this.password == '') {
        this.passmessage = 'pasword is required' ;
       } else {
        this.passmessage = '' ;
      };
      
       return this.message && this.passmessage
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
        var letters = /^[^-0-9]+$/;
        
        if (letters) {
          e.preventDefault()
        }
        
      }

      
      // invalidpass(){
      //   if ( this.password == ''  ) {
      //     this.passmessage = 'username is required' ;
      //     return this.passmessage; 
      //   }
      //   else {
      //     this.passmessage = '' ;
      //     return this.passmessage; 
      //   }
      // }



      // teded(): true | any {
      //   if (Number(this.username) <= 3 && Number(this.username) >= 10) {
      //     this.message = 'username bin 3 ta 10' ;
      //     return this.message; 
      //   }
        
      // }
  }