import { Component,ViewChild,ElementRef ,Input } from '@angular/core';

declare var $: any;

import { trigger , state , style , animate , transition} from '@angular/animations';
import { BackendService } from './+services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : []
})
export class AppComponent {
  title = 'foodfront';
  // person: any;
  constructor() {}
  
  @ViewChild('myModal') myModal:ElementRef | any;
  openModal(){
  $(this.myModal.nativeElement).modal('show')
}
closeModal(){
  $(this.myModal.nativeElement).modal('hide')
}



  
//   const myModal = document.getElementById('myModal')
//   const myInput = document.getElementById('myInput')

//   myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

}
