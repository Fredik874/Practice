import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../services/user.servise';

import {environment} from "../environment"
import {User} from '../models/user';
 
@Injectable()
export class AuthService{
    constructor(private http: HttpClient,private userService: UserService){
        this.userService.getUsers().subscribe(res => {
            this.usersArr = res;
            console.log("Onload users",res);
        });
    }
    private usersArr: User[] = [];
   
    loginIn(login:string,password:string):boolean{
        console.log("In login",this.usersArr.length);
        for(var i = 0; i < this.usersArr.length; i++){
     
            if(this.usersArr[i].login == login && this.usersArr[i].password == password){
                console.log("true");
                return true;
            }else{
                console.log("false");
                console.log(login,password);
                return false;
            }
        }
       
    }
    


    
}