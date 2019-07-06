import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: 'more.page.html',
  styleUrls: ['more.page.scss']
})
export class MorePage {

  constructor(private navController: NavController, private router: Router) { }
  items=[
    { id:1 , title:"โปรไฟล์" , path:"/profile/1",icon:"https://image.flaticon.com/icons/svg/108/108637.svg"},
    { id:1 , title:"ภาพวาดที่ใช้" , path:"/drawuse",icon:"https://image.flaticon.com/icons/svg/61/61222.svg"},
    { id:3 , title:"การ์ดที่กดไลค์" , path:"/app/tabs/more/liked",icon:"https://image.flaticon.com/icons/svg/57/57602.svg"} ,
    { id:5 , title:"เกี่ยวกับเรา" , path:"/app/tabs/more/aboutus",icon:"https://image.flaticon.com/icons/svg/685/685815.svg"} ,
    { id:6 , title:"ช่วยเหลือ", path:"/app/tabs/more/help",icon:"https://image.flaticon.com/icons/svg/906/906794.svg"} ,
    { id:7 , title:"ออกจากระบบ",icon:"https://image.flaticon.com/icons/svg/992/992680.svg"} ,
  ];
  item={
    id:"1",
    name:"tester",
    detail:"ผู้ทดลองแอพ",
    profile:"https://www.trueprofile.com/wp-content/uploads/2017/07/profile-time.jpg",
    cards:3,
    following:4,
    followers:2,
  };
 
  ngOnInit() {
  }
 
  openDetails() {
    this.router.navigateByUrl(`/app/tabs/more/42`);
  }
 
  goToPlanets() {
    this.navController.navigateRoot(`/app/tabs/home`)
  }

}
