import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites-and-connect',
  templateUrl: './invites-and-connect.component.html',
  styleUrls: ['./invites-and-connect.component.scss'],
})
export class InvitesAndConnectComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  avtar_profile: string= '../assets/icon/man-avatar-profile.jpg';
  list:  any = [
    {image:this.avtar_profile,heading:'allex tells',sub_heading: 'film maker, artist, thinker'},
    {image:this.avtar_profile,heading:'allex tells',sub_heading: 'film maker, artist, thinker'},
    {image:this.avtar_profile,heading:'allex tells',sub_heading: 'film maker, artist, thinker'},
    {image:this.avtar_profile,heading:'allex tells',sub_heading: 'film maker, artist, thinker'},
  ];
}
