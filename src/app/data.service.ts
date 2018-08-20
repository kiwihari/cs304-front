import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { $ } from 'protractor';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  	getProfile(){
      return this.http.get('http://localhost:3000/api/profile');    }

      getSample() {
        return this.http.get('http://localhost:3000/api/sample');    }

    getPage2(){
      return this.http.get('http://localhost:3000/api/page2');
    }

    register(user:any){
      return this.http.post('http://localhost:3000/api/users/register',user);
        }

    getUsers(){
      return this.http.get('http://localhost:3000/api/users');
    }
}
