import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
