import { Component } from '@angular/core';
import { dataGridColumn } from 'src/app/shared/data-grid/dataGridColumn';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
columns:dataGridColumn[] = [
    {
      field: 'userType',
      title:'نوع',
      type:'text'
    },
    {
      field: 'fullname',
      title:'نام',
      type:'text'
    },
    {
      field: 'username',
      title:'نام کاربری',
      type:'text'
    },
    {
      field: 'email',
      title:'ایمیل',
      type:'text'
    },
    {
      field: 'verifide',
      title:'وضعیت',
      type:'check'
    },
  ];

  edit(row:any){

  };

  remove(row:any){

  }

}
