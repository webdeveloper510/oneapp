import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private menuCtrl: MenuController,private route: Router) { }

  ngOnInit() {}
  app_title: string = "oneapp";
  arrow_back_img: string = "../assets/icon/arrow_back.png";
  avtar_profile: string= '../assets/icon/man-avatar-profile.jpg';
  
  closeMenu(navigation_path: string) {
    this.menuCtrl.toggle();
    if(navigation_path){
      this.route.navigate([navigation_path]);
    }
    
  }
}
