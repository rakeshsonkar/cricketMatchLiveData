import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../Service/api-call.service';
import { MatchCardComponent } from '../match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  getallMatch: any;
  constructor(private _api:ApiCallService){
    _api.getAllMatch().subscribe({
      next:data=>{
        this.getallMatch=data
      },
      error:error=>{
        console.log(error);
      }
    });
  }
  ngOnInit(): void {
    
  }

}
