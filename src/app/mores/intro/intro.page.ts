import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage{
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(public alertController: AlertController,private navController: NavController, private router: Router) { 
    this.presentAlert()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ขอบคุณที่เข้ามาทดลองนะครับ',
      subHeader: 'ตอนนี้ระบบสมาชิกยังเปิดทำการ',
      message: '<b>สามารถเข้าไปทดลองโดยพิมพ์อะไรลงไปก็ได้ครับ ขอเพียงให้ครบช่องก็พอ</b>' ,
      buttons: ['สาธุ']
    });
    await alert.present();
  }

}
