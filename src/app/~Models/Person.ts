import { FormControl, Validators } from "@angular/forms";

export class Person {
  
   
       userName :string = '' ;
       loginpassword :string = '' ;
       password :string = '' ;
       againpass:string = '';
       fullName:string = '';
       email:string = '';
       nameOfResturant:string = '';
       experience:number = 0;
       phone:string = '';
       boos:boolean = false;

       usermessage:string = '' ;
       passmessage:string = '' ;
       againmessage:string = '';
       namemessage:string = '' ;
       emailmessage:string = '' ;
       phonemessage:string = '' ;
       expmessage:string = '';
       rnmessage:string = ''; 

       public clear(){
         this.fullName = '';
         this.userName = '' ;
         this.password = '';
         this.loginpassword = '';
         this.againpass = '';
         this.email = '';
         this.phone = '';
         this.nameOfResturant = '';
         this.experience = 0;
         this.boos = false;

         this.namemessage = '';
         this.usermessage = '';
         this.passmessage = '';
         this.againmessage = '';
         this.emailmessage = '' ;
         this.phonemessage = '' ;
         console.clear();
       }
       public invalidName(){
        if ( this.fullName != '' && this.fullName.length <= 2 ) {
          this.namemessage = 'kame'
        } else{
          this.namemessage = ''
        }
        return this.namemessage ;
       }
       
      public invalidUser(){
        if (this.userName != '' && this.userName.length <= 2 ) {
          this.usermessage = 'tedad raft'
        } else{
          this.usermessage = '';
        }
        return this.usermessage 
        
       }

      public invalidPass(){
        if (this.password == '' && this.againpass == '') {
          this.passmessage = 'pasword is required' ;
         } 
        if (this.againpass == '') {
          this.againmessage = 'tekrar pasword is required' ;
         } else {
          this.passmessage = '' ;
          this.againmessage = '' ;
        }
        if (this.password != this.againpass && this.againpass != '') {
          this.passmessage = 'mogh';
          this.againmessage = 'mogh';
        }
        return this.passmessage && this.againmessage; 
      }
      
      
      
      public invalidPhone(){
        if (this.phone == '') {
          this.phonemessage = 'phone is required' ;
         } else {
          this.phonemessage = '' ;
        };
        return this.phonemessage;
      }

      public invalidExp(){
        if (this.experience <= 5 ) {
          this.expmessage = 'hadaghal 5'
        }
        else {
          this.expmessage = ''
        }
      }
      
      public invalidRn(){
        if (this.nameOfResturant == '') {
          this.rnmessage = 'invalid'
        }else{
          this.rnmessage = '';
        }
      }



      keyNumber(event : any){
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)){
          event.preventDefault();
        }
      }
      
      keyWord(event:any){
        const letter = /^[a-zA-Z]+$/
        const inputChar = String.fromCharCode(event.charCode);
        if (!letter.test(inputChar)){
          event.preventDefault();
        }
        
      

 // public empty(){
      //   if (this.fullName == '') {
      //     this.namemessage = 'asfkdkfsdkf'
      //   } else{
      //     this.namemessage = ''
      //   };

      //   if ( this.userName == '' ) {
      //     this.usermessage = 'username is required' ;
      //   } else {
      //     this.usermessage = '' ; 
      //   };

      //   if ( this.userName == '' ) {
      //     this.usermessage = 'username is required' ;
      //   } else {
      //     this.usermessage = '' ; 
      //   };

      //   if (this.password == '') {
      //     this.passmessage = 'pasword is required' ;
      //    } else {
      //     this.passmessage = '' ;
      //   };

      //   if (this.email == '') {
      //     this.passmessage = 'email is required' ;
      //    } else {
      //     this.passmessage = '' ;
      //   };

      //   if (this.phone == '') {
      //     this.phonemessage = 'phone is required' ;
      //    } else {
      //     this.phonemessage = '' ;
      //   }

      //   return this.namemessage && this.usermessage && this.passmessage && this.emailmessage && this.phonemessage
      // } 
      }
  }


