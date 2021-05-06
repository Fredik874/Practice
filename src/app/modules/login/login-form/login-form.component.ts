import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import * as shajs from 'sha.js'

export class User{
    constructor(public login: string, 
                public password: string
                )
    { }
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent {
    InptLogin: string;
    InptPassword: string;
    
    BasicSingIn(){
        console.log(this.InptLogin,this.InptPassword);
        let Sall:string = "1f45rt3-(+*-e2";
        let HexPassword:string = this.InptPassword + Sall;
        console.log(this.InptLogin,shajs('sha384').update({HexPassword}).digest('hex'));
    }
}
