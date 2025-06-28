import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
 
  
  Signin(userData:object):Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/auth/login', userData);}
}
