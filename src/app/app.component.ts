import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger , state , style , animate , transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : []
})
export class AppComponent {
  title = 'foodfront';

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  @Input() signup = ''
  @Input() login = ''
  
}
// state('open', style({
//   height: '200px',
//   opacity: 1,
//   backgroundColor: 'yellow'
// })),
// state('closed', style({
//   height: '100px',
//   opacity: 0.8,
//   backgroundColor: 'blue'
// }))
interface IPerson{
  username:string;
  fullname:string;
  password:string;
  chef:boolean;
  
clear() : any ;

}