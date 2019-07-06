import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  constructor() { }
  profiles=[
    {name:"ธรรมใจใส",profile:"https://jaipun.com/profile/1557310433.jpg",detail:"writer"},
    {name:"ดอกบัว",profile:"https://jaipun.com/profile/1557137497.jpg",detail:"writer"},
    {name:"ธรรมะทันโลก",profile:"https://jaipun.com/profile/1559269543.png",detail:"writer"},
    {name:"punyapath",profile:"https://jaipun.com/profile/1557662753.png",detail:"writer"},
    {name:"thawanat",profile:"https://jaipun.com/profile/1559055046.png",detail:"writer"},
    {name:"ธรรมใจใส",profile:"https://jaipun.com/profile/1557662753.png",detail:"writer"},
  ]
  ngOnInit() {
  }

}
