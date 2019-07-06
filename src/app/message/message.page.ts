import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  filmId = null;
  item={
    id:"1",
    name:"punyapath",
    detail:"Super Monk",
    profile:"https://jaipun.com/profile/1557662753.png",
    cards:1,
    following:4,
    followers:2,
  };
  items=[
      {
          id:1,
          notification_id:7,
          user_id:8,
          item_id:10,
          item:"Ready to go?",
          itemType:1,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"punyapath"
          },
          "enabled": true
      },
      {
          id:2,
          notification_id:7,
          user_id:8,
          item_id:11,
          item:"Ready to go?",
          itemType:7,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"Thawanat"
          },
          "enabled": false
      },
      {
          id:3,
          notification_id:7,
          user_id:8,
          item_id:12,
          item:"Ready to go?",
          itemType:4,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"punyapath"
          },
          "enabled": true
      }
  ]
  constructor(private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
