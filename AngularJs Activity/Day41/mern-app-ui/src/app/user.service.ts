import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl :string="http://localhost:3001/users";
  constructor(private _http:HttpClient) { }
  //find users
  public getUsers() : Observable<any>{
    return this. _http.get(this.baseUrl);
  }
  //store user which will have {_id,nae,age};
  public storeUser(formValue:any): Observable<any>{
    return this._http.post(this.baseUrl,formValue);
  }
  /// find single user
  public findUser(id:any):Observable<any>{
    return this._http.get(this.baseUrl+'/'+id);
  }
  /// delete
  public deleteUser(id:any):Observable<any>{
    return this._http.get(this.baseUrl+'/' +id)
  }
    //// update
    public updateUser(id:any,age:any,data:any):Observable<any>{
      return this._http.put(this.baseUrl+'/'+id+'/'+age,data)
}
}