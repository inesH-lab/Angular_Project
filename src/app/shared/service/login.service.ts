import { User } from 'src/app/Models/User.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlApiLogin: string = "/BACKEND/api/login";
  urlApiAuth: string = "/BACKEND/api/auth/";

  constructor(private Http: HttpClient) { }
  public postLogin(login: string, password: string): Observable<User>{
    let data: string = "login=" + login + "&password=" + password;
    let httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    };

    return this.Http.post<User>(this.urlApiLogin, data, httpOptions);
  }
  public getLogin(login:string): Observable<User>{
    let data : string = "login=" + login;
    return this.Http.get<User>(this.urlApiAuth + login);
  }

}
