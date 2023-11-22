import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../Service/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {
  tableheading: any;
  constructor(private apiService: ApiCallService) {}
  cgeetPointTable: any;
  ngOnInit(): void {
    this.apiService.getPointTable().subscribe({
      next:(data:any)=>{
        this.cgeetPointTable=data
        this.tableheading=[...this.cgeetPointTable[0]]
        //console.log(data)
      },
      error:(error: any)=>{
        console.log(error);
      }
    })
   
  }

}
