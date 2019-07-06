import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor() { }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }
  items=[
    {
      id: 26,
      user_id: 3,
      card: "<div>สิ่งที่ผิดพลาดจะหมดไป</div><div>ต้องแก้ไข<b>ด้วยตนเอง</b></div>",
      cardPhoto: "https://jaipun.com/draw/1556337709.png",
      cardView: 0,
      cardLike: 40,
      cardComment: 0,
      cardShare: 2,
      cardTime: "12 Jun 10:00",
      card_ip: "172.68.144.224",
      created_at: "2019-06-15 03:30:02",
      updated_at: "2019-06-22 17:54:54",
      user: {
        id: 3,
        facebook_id: "0",
        name: "ธรรมะใจใส",
        detail: "ของคุณครูไม่ใหญ่",
        email: "123@gmail.com",
        profile: "https://jaipun.com/profile/1557310433.jpg",
        password: "25d55ad283aa400af464c76d713c07ad",
        stories: 470,
        following: 0,
        followers: 0,
        notification: 0,
        link: "0",
        created_at: "2019-05-08 10:12:11",
        updated_at: "2019-06-30 07:36:00",
        boons: 0,
        cards: 2,
        power: 2665
      },
  },
  {
    id: 16,
    user_id: 3,
    card: "<b>นึกถึงความตาย</b><div>แล้วจะทำให้ขยันนั่งธรรมะ</div>",
    cardPhoto: "https://jaipun.com/draw/1557584779.png",
    cardView: 0,
    cardLike: 30,
    cardComment: 0,
    cardShare: 1,
    cardTime: 1560568543,
    card_ip: "162.158.165.143",
    created_at: "2019-06-15 03:15:43",
    updated_at: "2019-06-24 08:17:18",
    user: {
      id: 3,
      facebook_id: "0",
      name: "ธรรมะใจใส",
      detail: "ของคุณครูไม่ใหญ่",
      email: "123@gmail.com",
      profile: "/profile/1557310433.jpg",
      password: "25d55ad283aa400af464c76d713c07ad",
      stories: 470,
      following: 0,
      followers: 0,
      notification: 0,
      link: "0",
      created_at: "2019-05-08 10:12:11",
      updated_at: "2019-06-30 07:36:00",
      boons: 0,
      cards: 2,
      power: 2665
    },
  },
  {
    id: 23,
    user_id: 3,
    card: "<div>ตราบใดที่เรายังไม่หมดกิเลสอาสวะ เราก็ต้องเวียนว่ายตายเกิด<b>ในภพทั้งสาม</b></div>",
    cardPhoto: "https://jaipun.com/draw/1557615963.png",
    cardView: 0,
    cardLike: 20,
    cardComment: 0,
    cardShare: 1,
    cardTime: "12 Jun 10:00",
    card_ip: "162.158.166.84",
    created_at: "2019-06-15 03:26:43",
    updated_at: "2019-06-24 08:17:10",
    user: {
      id: 3,
      facebook_id: "0",
      name: "ธรรมะใจใส",
      detail: "ของคุณครูไม่ใหญ่",
      email: "123@gmail.com",
      profile: "https://jaipun.com/profile/1557310433.jpg",
      password: "25d55ad283aa400af464c76d713c07ad",
      stories: 470,
      following: 0,
      followers: 0,
      notification: 0,
      link: "0",
      created_at: "2019-05-08 10:12:11",
      updated_at: "2019-06-30 07:36:00",
      boons: 0,
      cards: 2,
      power: 2665
    },
  },
  {
    id: 12,
    user_id: 3,
    card: "<div>ความเพลินภายนอก เป็นส่วนเกินของชีวิต</div><div><b>แต่ความเพลินภายในเป็นเรื่องหลักของชีวิต</b></div>",
    cardPhoto: "https://jaipun.com/draw/1557615900.png",
    cardView: 0,
    cardLike: 20,
    cardComment: 0,
    cardShare: 0,
    cardTime: 1560568164,
    card_ip: "172.68.146.87",
    created_at: "2019-06-15 03:09:24",
    updated_at: "2019-06-22 01:50:33",
    user: {
      id: 3,
      facebook_id: "0",
      name: "ธรรมะใจใส",
      detail: "ของคุณครูไม่ใหญ่",
      email: "123@gmail.com",
      profile: "/profile/1557310433.jpg",
      password: "25d55ad283aa400af464c76d713c07ad",
      stories: 470,
      following: 0,
      followers: 0,
      notification: 0,
      link: "0",
      created_at: "2019-05-08 10:12:11",
      updated_at: "2019-06-30 07:36:00",
      boons: 0,
      cards: 2,
      power: 2665
    },
  },
    {
      id:"1",
      card:"<div><b>บุญเป็นพลังแห่งความบริสุทธิ์</b></div><div>ที่จะบันดาลให้เกิดความสุข</div><div>ความสำเร็จในชีวิตในทุกๆ ระดับ</div>",
      cardPhoto:"https://jaipun.com/draw/1557615651.png",
      cardTime:"15 Jun 10:33",
      cardLike:10,
      cardComment:3,
      cardShare:4,
      cardView:4,
      user:{
        id:1,
        name:"ธรรมะใจใส"
      }
    },
    {
      id:"2",
      card:"<div>ทำจิตให้สบาย</div><div>ทำใจให้สงบ</div><div>ก็จะพบกับ<b>ความสว่างภายใน</b></div>",
      cardPhoto:"https://jaipun.com/draw/1557615628.png",
      cardTime:"15 Jun 10:24",
      cardLike:5,
      cardComment:3,
      cardShare:4,
      cardView:10,
      user:{
        id:1,
        name:"ธรรมะใจใส"
      }
    },
    {
      id:"3",
      card:"<div><b>โลกอยู่ได้ด้วยการให้</b></div><div>การให้เป็นความสุขอันวิเศษ</div><div>เราจะรู้จักความสุขชนิดนี้ได้ต่อเมื่อเราได้ให้</div></div>",
      cardPhoto:"https://jaipun.com/draw/1556344598.png",
      cardTime:"12 Jun 10:00",
      cardLike:5,
      cardComment:3,
      cardShare:4,
      cardView:10,
      user:{
        id:1,
        name:"ธรรมะใจใส"
      }
    }
  ];

}
