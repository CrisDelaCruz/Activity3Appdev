import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contacts = [
    {
      name: 'Kassy',
      phoneNumber: '09488745380',
      image: 'a.jpg',
    },
    {
      name: 'Alexis',
      phoneNumber: '09355543564',
      image: 'd.png',
    },
    {
      name: 'JhonMark',
      phoneNumber: '09517664573',
      image: 'b.png',
    },
    {
      name: 'Ellias',
      phoneNumber: '09518515381',
      image: 'e.png',
    },
    {
      name: 'Ruby',
      phoneNumber: '09503376844',
      image: 'd.png',
    },
    {
      name: 'My Number',
      phoneNumber: '09367656690',
      image: 'c.png',
    },
    {
      name: 'Enriko',
      phoneNumber: '09164412267',
      image: 'f.png',
    },
  ];

  customAlertOptions: any = {
    header: 'Contacts',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
