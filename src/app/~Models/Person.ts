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
          this.namemessage = 'نام باید حداقل سه حرف باشد'
        } else{
          this.namemessage = ''
        }
        return this.namemessage ;
       }
       
      public invalidUser(){
        if (this.userName != '' && this.userName.length < 5 ) {
          this.usermessage = 'یوزر نیم باید حداقل 5 حرف باشد'
        } else{
          this.usermessage = '';
        }
        return this.usermessage 
        
       }

      public invalidPass(){
        if (this.password == '' && this.againpass == '') {
          this.passmessage = 'رمز عبور اجباری است' ;
         } 
        if (this.againpass == '') {
          this.againmessage = 'تکرار رمز عبور اجباری است' ;
         } else {
          this.passmessage = '' ;
          this.againmessage = '' ;
        }
        if (this.password != this.againpass && this.againpass != '') {
          this.passmessage = 'رمز عبور یا تکرار رمز عبور اشتباه است';
          this.againmessage = 'رمز عبور یا تکرار رمز عبور اشتباه است';
        }
        if (this.password == '' && this.againpass != '') {
          this.againmessage = 'kali'
        }
        return this.passmessage && this.againmessage; 
      }
      
      public invalidEmail(){
        if (this.email != '' && !this.email.includes('@')) {
          this.emailmessage = 'namotabar'
        }
        else{
          this.emailmessage = ''
        }
        return this.emailmessage ;
      }
      
      public invalidPhone(){
        if (!this.phone.startsWith('9') && this.phone != '') {
          this.phonemessage = '' ;
          this.phonemessage = 'namotabar'

          
        }
        else if(this.phone != '' && this.phone.length < 10){
          this.phonemessage = ''
          this.phonemessage = 'kheily'
        }
        else{
          this.phonemessage = '' ;
        }
        return this.phonemessage;
      }

      public invalidExp(){
        if (this.experience.valueOf() <= 5 && this.experience != 0) {
          this.expmessage = 'حداقل مقدار مجاز سوابق کاری پنج سال است'
        }
        else {
          this.expmessage = ''
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
        const letter = /[^a-zA-Zآ-ی]/g
        const inputChar = String.fromCharCode(event.charCode);
        if (letter.test(inputChar)){
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


