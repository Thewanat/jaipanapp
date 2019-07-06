import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  userId = null;
  item={
    id:"1",
    name:"punyapath",
    detail:"Super Monk",
    profile:"https://jaipun.com/profile/1557662753.png",
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
  constructor(private activatedRoute: ActivatedRoute,public alertController: AlertController,private  router:  Router) { }
 
  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  todo = {
    user_id: this.activatedRoute.snapshot.paramMap.get('id'),
    message: ''
  };
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'ส่งข้อความสำเร็จแล้ว แต่นี้ยังอยู่เวอร์ชั่นทดลองนะครับ^^',
      message: 'ID ที่ส่งหา คือ <b>'+this.todo.user_id+'</b> , ข้อความที่คุณส่งไป คือ <b>" '+this.todo.message+' "</b>',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl('app/tabs/notification/1');
  }
  sendMessage() {
    console.log(this.todo)
    this.presentAlert()
  }
}
