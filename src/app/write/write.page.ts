import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-write',
  templateUrl: 'write.page.html',
  styleUrls: ['write.page.scss']
})
export class WritePage {
 username=null;
 model = 'some text';
  constructor(public alertController: AlertController,private  router:  Router) {}
  todo = {
    card: '',
    cardPhoto: ''
  };
  items=[
    { id:1,draw:"https://jaipun.com/draw/1555638261.png"},
    { id:2,draw:"https://jaipun.com/draw/1555684915.png"},
    { id:3,draw:"https://jaipun.com/draw/1556328728.png"},
    { id:4,draw:"https://jaipun.com/draw/1556328818.png"},
    { id:5,draw:"https://jaipun.com/draw/1556328828.png"},
    { id:6,draw:"https://jaipun.com/draw/1556328834.png"},
    { id:7,draw:"https://jaipun.com/draw/1556328868.png"},
    { id:8,draw:"https://jaipun.com/draw/1556328879.png"},
    { id:9,draw:"https://jaipun.com/draw/1556328891.png"},
    { id:10,draw:"https://jaipun.com/draw/1556328903.png"},
    { id:11,draw:"https://jaipun.com/draw/1556328918.png"},
  ]
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'คุณโพสสำเร็จแล้ว แต่นี้เวอร์ชั่นทดลองอยู่นะครับ^^',
      message: 'ข้อความของคุณ คือ <b>"'+this.todo.card+'"</b> , ภาพประกอบของคุณ คือ <b>'+this.todo.cardPhoto+'</b>' ,
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl('/card/1');
  }
  logForm() {
    console.log(this.todo)
    this.presentAlert()
  }

}
