import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InvitesAndConnectComponent } from './invites-and-connect/invites-and-connect.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'sign-up',
    component : SignupComponent
  },
  {
    path: 'forgot-password',
    component : ForgotPasswordComponent
  },
  {
    path: 'welcome',
    component : WelcomeComponent
  },
  {
    path: 'upload-picture',
    component : UploadProfileComponent
  },
  {
    path: 'find-friends',
    component : FindFriendsComponent
  },
  {
    path: 'invites-and-connect',
    component : InvitesAndConnectComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
