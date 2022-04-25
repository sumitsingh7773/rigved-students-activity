import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    baseUrl : string = "http://localhost:3001/users";
    constructor(private _http : HttpClient) { }
  
    //Read All users Data
    public getUsers() : Observable<any>{
      return this._http.get(this.baseUrl);
    }
    //create user which will have { _id,name,age}
    public createUser(formValue:any):Observable<any>{
      return this._http.post(this.baseUrl,formValue);
    }
    
    //delete user by id
    public deleteUser(id:any):Observable<any>{
      return this._http.delete(this.baseUrl+'/'+id)
    }
    //update user
    public updateUser(id:any,name:any,data:any):Observable<any>{
      return this._http.put(this.baseUrl+'/'+id+'/'+name,data)
    }
  }