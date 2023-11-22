import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpclient:HttpClient) { }

  getAllMatch(){
    return this._httpclient.get(`${environment.ApiUrl}/cricket`);
  }

  getLiveMatches(){
    return this._httpclient.get(`${environment.ApiUrl}/cricket/live`);
  }
  getPointTable(){
    return this._httpclient.get(`${environment.ApiUrl}/cricket/point-table`);
  }
}
