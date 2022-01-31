import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  app_logo: string = "../assets/applogo/logo.png";
  facebook_logo: string = "../assets/social_images/facebook.png";
  linkedin_logo: string = "../assets/social_images/linkedin.png";
  google_logo: string = "../assets/social_images/google.png";
  twitter_logo: string = "../assets/social_images/twitter.png";
}
