import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.page.html',
  styleUrls: ['./recommend.page.scss'],
})
export class RecommendPage implements OnInit {
  
  constructor(private navController: NavController, private router: Router) { }
  items=[
    {
      id:"1",
      name:"punyapath",
      detail:"Super Monk",
      profile:"https://jaipun.com/profile/1557662753.png",
    },
    {
      id:"2",
      name:"Thawanat",
      detail:"Super Monk",
      profile:"https://image.flaticon.com/icons/svg/1865/1865950.svg",
    },
    {
      id:"3",
      name:"Suwattana",
      detail:"Super Monk",
      profile:"https://jaipun.com/profile/1559055046.png",
    }
  ];
  ngOnInit() {
  }

  openDetails() {
    this.router.navigateByUrl(`/tabs/person/42`);
  }

  unread(){
  }
  
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/tab3`)
  }
}
