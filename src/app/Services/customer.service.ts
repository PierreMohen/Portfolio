import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { customer } from '../model/customers';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url : string = "https://localhost:7164/api";

  token! : string;
  constructor(private _httpclient : HttpClient) { }
  getDonnees(): Observable<any> {

   return this._httpclient.get <customer>(this._url + '/customer/');
    
 }
 
}

