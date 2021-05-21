import { Component,OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'socialAuthIcons',
  templateUrl: './socialAuthIcons.component.html',
  styleUrls: ['./socialAuthIcons.component.css']
})

export class SocialIconsComponent implements OnInit {

    constructor(private authService: SocialAuthService,private router: Router) { }
    ngOnInit(): void {
      console.log();
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
        this.authService.authState.subscribe(SocialUser =>{
          this.router.navigate(['/books']);
          console.log(SocialUser);
        })
      });
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  
  }