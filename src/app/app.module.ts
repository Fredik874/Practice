import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login-form/login-form.component';

import { SocialLoginModule } from 'angularx-social-login';
import { SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider  } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '580830005607-vh3do8esp8h4rr9n3isoapf8ghpot5i0.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
