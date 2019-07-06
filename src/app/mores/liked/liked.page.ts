import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {

  items=[
    {
      id:"1",
      card:"<div><b>บุญเป็นพลังแห่งความบริสุทธิ์</b></div><div>ที่จะบันดาลให้เกิดความสุข</div><div>ความสำเร็จในชีวิตในทุกๆ ระดับ</div>".replace(/<\/?[^>]+(>|$)/g, "").replace(/&amp;nbsp;/gi,' '),
      cardPhoto:"https://jaipun.com/draw/1557615651.png",
      cardTime:"15 Jun 10:33",
      cardLike:1,
      cardComment:3,
      cardShare:4,
      user:{
        name:"ธรรมะใจใส"
      }
    },
    {
      id:"2",
      card:"<div>ทำจิตให้สบาย</div><div>ทำใจให้สงบ</div><div>ก็จะพบกับ<b>ความสว่างภายใน</b></div>".replace(/<\/?[^>]+(>|$)/g, "").replace(/&amp;nbsp;/gi,' '),
      cardPhoto:"https://jaipun.com/draw/1557615628.png",
      cardTime:"15 Jun 10:24",
      cardLike:1,
      cardComment:3,
      cardShare:4,
      user:{
        name:"ธรรมะใจใส"
      }
    },
    {
      id:"3",
      card:"<div><b>โลกอยู่ได้ด้วยการให้</b></div><div>การให้เป็นความสุขอันวิเศษ</div><div>เราจะรู้จักความสุขชนิดนี้ได้ต่อเมื่อเราได้ให้</div></div>".replace(/<\/?[^>]+(>|$)/g, "").replace(/&amp;nbsp;/gi,' '),
      cardPhoto:"https://jaipun.com/draw/1556344598.png",
      cardTime:"12 Jun 10:00",
      cardLike:1,
      cardComment:3,
      cardShare:4,
      user:{
        name:"ธรรมะใจใส"
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
