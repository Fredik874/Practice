import { Component,OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'socialAuthIcons',
  templateUrl: './socialAuthIcons.component.html',
  styleUrls: ['./socialAuthIcons.component.css']
})

export class SocialIconsComponent implements OnInit {

    constructor(private authService: SocialAuthService) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  
  }