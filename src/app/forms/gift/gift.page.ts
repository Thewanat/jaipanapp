import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-gift',
  templateUrl: './gift.page.html',
  styleUrls: ['./gift.page.scss'],
})
export class GiftPage implements OnInit {

  userId = null;
  item={
    id:"1",
    name:"punyapath",
    detail:"Super Monk",
    profile:"https://jaipun.com/profile/1557662753.png",
  };
  model=null;
  constructor(private activatedRoute: ActivatedRoute,public alertController: AlertController) { }
 
  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  }
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
      subHeader: 'POST SUCCESS!!',
      message: 'card ='+this.todo.card+' , cardPhoto ='+this.todo.cardPhoto ,
      buttons: ['OK']
    });
    await alert.present();
  }
  logForm() {
    console.log(this.todo)
    this.presentAlert()
  }

}
