import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {environment} from "../environment"
import {User} from '../models/user';
 
@Injectable()
export class UserService{
    constructor(private http: HttpClient){}
    private usersArr: User[] = [];
   
    getUsers(): Observable<User[]>  {
        console.log("get",this.usersArr) 
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }
    addUser(user:User):void{
        console.log("add",user)  
        this.http.post(`${environment.apiUrl}/users`,user);
        //this.usersArr.push(user);
    }
}