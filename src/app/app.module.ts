import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy ,RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { InvitesAndConnectComponent } from './invites-and-connect/invites-and-connect.component';
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginComponent,
    SignupComponent,
    UploadProfileComponent,
    WelcomeComponent,
    FindFriendsComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    InvitesAndConnectComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
