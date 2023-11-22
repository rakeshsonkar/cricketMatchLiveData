import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../Service/api-call.service';
import { MatchCardComponent } from "../match-card/match-card.component";

@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [CommonModule, MatchCardComponent]
})
export class LiveComponent implements OnInit {
  liveMatches:any
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getLiveMatches().subscribe({
      next:data=>{
        this.liveMatches=data
      },
      error:error=>{
        console.log(error);
      }
    });
  }

}
