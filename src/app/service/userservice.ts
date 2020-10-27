import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/model/user';
import { observable, Observable } from 'rxjs';

@Injectable()
export class UserService{
    baseUrl="http://localhost:8585/users";

    constructor(private http:HttpClient){

    }
    addUser(user:User):Observable<User>{
        let url=this.baseUrl+"/add";
        let observable:Observable<User>=this.http.post<User>(url,user);
        return observable;
        
    }

    getUser(userId:Number):Observable<User>{
        let url=this.baseUrl+"/get/"+userId;
        let observable:Observable<User>=this.http.get<User>(url);
        return observable;
    }

    getAllUsers():Observable<User[]>{
        let url=this.baseUrl+"/get/all";
        let observable:Observable<User[]>=this.http.get<User[]>(url);
        return observable;
    }

    updateUser(user:User):Observable<User>{
        let url=this.baseUrl+"/update";
        let observable:Observable<User>=this.http.put<User>(url,user);
        return observable;
    }

    deleteUser(userId:Number):Observable<void>{
        let url=this.baseUrl+"/delete/"+userId;
        let observable:Observable<void>=this.http.delete<void>(url);
        return observable;
    }
}