import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/login/login-form/login-form.component';
import { Books } from './modules/books/books.component';
//import { AuthGuard } from './_helpers';

const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'books', component: Books },

    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);