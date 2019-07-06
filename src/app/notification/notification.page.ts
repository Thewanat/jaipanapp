import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['notification.page.scss']
})
export class NotificationPage {

  items=[
      {
          id:1,
          notification_id:7,
          user_id:8,
          item_id:10,
          item:"กดไลด์การ์ดของคุณ",
          itemType:1,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"punyapath"
          }
      },
      {
          id:2,
          notification_id:7,
          user_id:3,
          item_id:11,
          item:"สาธุครับๆ ดีมากๆ",
          itemType:3,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"Thawanat"
          }
      },
      {
          id:3,
          notification_id:7,
          user_id:8,
          item_id:12,
          item:"เป็นอย่างไงบ้าง ?",
          itemType:5,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"Suwattana"
          }
      },
      {
          id:4,
          notification_id:7,
          user_id:8,
          item_id:12,
          item:"กำลังใช้ภาพวาดของคุณอยู่",
          itemType:6,
          notificationStatus:1,
          notificationTime:"now",
          user:{
              name:"Suwattana"
          }
      }
  ]
  constructor(private navController: NavController, private router: Router) { }
 
  ngOnInit() {
  }
 
  openDetails() {
    this.router.navigateByUrl(`/tabs/notification/42`);
  }
 
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/home`)
  }
}
