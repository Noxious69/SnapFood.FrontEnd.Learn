import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  person: any;

  constructor(private modalService: NgbModal ) {}
  
  public open(modal: any): void {
    this.modalService.open(modal);


  }
}
