import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {User} from '../../../core/models/user'
import {UserService} from '../../../core/services/user.servise';
import {AuthService} from '../../../core/services/auth.service';
import * as shajs from 'sha.js'



@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent {
    
    InptLogin: string;
    InptPassword: string;

    constructor(private userService: UserService,private authService: AuthService,private router: Router){}
    BasicSingIn(){
        console.log(this.InptLogin,this.InptPassword);
        let Sall:string = "1f45rt3-(+*-e2";
        let SallPassword:string = this.InptPassword + Sall;
        let HexPassword:string = shajs('sha384').update({SallPassword}).digest('hex');
        
        if(this.authService.loginIn(this.InptLogin,HexPassword)){
          this.router.navigate(['/books']);
        }

        console.log(this.InptLogin,HexPassword);
    }
}
