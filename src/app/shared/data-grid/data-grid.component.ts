import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { dataGridColumn } from './dataGridColumn';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  data:any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.post(this.datasource,{})
    .subscribe(result =>{
      this.data = result as any[];
    });
  }

  @Input() datasource:string = '';
  @Input() columns:dataGridColumn[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
}
