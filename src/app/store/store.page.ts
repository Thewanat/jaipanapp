import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {
  constructor(private navController: NavController, private router: Router) { }
  tags=[
    {id:1,title:"ทั้งหมด"},
    {id:1,title:"มาใหม่"},
    {id:1,title:"สัตว์"},
    {id:1,title:"สิ่งของ"},
    {id:1,title:"คน"},
    {id:1,title:"ความรัก"},
    {id:1,title:"พระพุทธศาสนา"},
    {id:1,title:"เทคโนโลยี"},
  ]
  items=[
    {
      id:1,
      drawname_id:1,
      drawname:"family",
      drawnameDetail:"ภาพวาดครอบครัวสุขสันต์",
      drawTag:"https://jaipun.com/drawtag/1558875866.png",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"por_por",
        detail:"นักวาดหน้าใส",
        profile:"https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-cartoon-beauty-short-hair-girl-download-image_1184031.jpg",
      }
    },
    {
      id:2,
      drawname_id:1,
      drawname:"ordination",
      drawTag:"https://jaipun.com/drawtag/1558876077.png" ,
      drawnameDetail:"ภาพวาดครอบครัวสุขสันต์",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"มิ้น",
        detail:"นักวาดผู้น่ารัก",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbw5JBq26rDLIU-dhUKxHd-46WKGFQSR1OVd2twlV_l6YtM57Aw",
      }
    },
    {
      id:3,
      drawname_id:1,
      drawname:"health",
      drawTag:"https://jaipun.com/drawtag/1558531431.png" ,
      drawnameDetail:"ภาพวาดครอบครัวสุขสันต์",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"jaipun",
        detail:"Web Master",
        profile:"https://jaipun.com/profile/1557662043.png",
      }
    },
    {
      id:4,
      drawname_id:1,
      drawname:"ภาพวาดใสๆ",
      drawTag:"https://jaipun.com/drawtag/1558533066.png" ,
      drawnameDetail:"สไตล์นิว",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"New",
        detail:"^^",
        profile:"https://pinimg.icu/wall/0x0/kawaii-drawings-cute-drawings-cute-characters-girl-cartoon-big-Ee0a59c55e6105dcb5a100a39d9c3d0c6.jpg?t=5ce334df309f7",
      }
    },
    {
      id:4,
      drawname_id:1,
      drawname:"novice",
      drawTag:"https://jaipun.com/drawtag/1558876290.png" ,
      drawnameDetail:"ภาพวาดสามเณรน้อยผู้น่ารัก",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"น้ำผึ้ง",
        detail:"^^",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tAyJh1HfGwxyBHmLTurMg_kZ0Eh4P-jZH6UldL7_LMXljxwwfg",
      }
    },
    {
      id:4,
      drawname_id:1,
      drawname:"novice",
      drawTag:"https://jaipun.com/drawtag/1558876353.png" ,
      drawnameDetail:"ภาพวาดสามเณรน้อยผู้สงบ",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"เอื้อ",
        detail:"^^",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30G5JJ6w8K_TbOZpftiz9SDoqp_h8IdW3ZFEagYx7C-Xw_YJeFA",
      }
    },
    {
      id:4,
      drawname_id:1,
      drawname:"Yoko",
      drawTag:"https://jaipun.com/drawtag/1559834793.png" ,
      drawnameDetail:"ภาพวาดสบายตา",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"Yoko",
        detail:"^^",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGTgFv1sG475pLrj5zEDjHxcz2XTRpqVxwnRjKotwAwHgeSn4Mw",
      }
    },
    {
      id:4,
      drawname_id:1,
      drawname:"happiness",
      drawTag:"https://jaipun.com/drawtag/1560922934.png" ,
      drawnameDetail:"ภาพวาดพาสุขใจ",
      drawnameTime:"20 May 2014",
      drawUse:10,
      user:{
        id:"1",
        name:"Manew",
        detail:"^^",
        profile:"https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-hand-drawn-little-girl-elementary-school-student-can-be-commercial-element-png-image_593168.jpg",
      }
    },
  ];

  draws=[
    {
      id: 1,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1555638261.png",
      created_at: "2019-04-19 01:44:21",
      updated_at: "2019-04-19 01:44:21"
      },
      {
      id: 2,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1555684915.png",
      created_at: "2019-04-19 14:41:55",
      updated_at: "2019-04-19 14:41:55"
      },
      {
      id: 3,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328728.png",
      created_at: "2019-04-27 01:32:08",
      updated_at: "2019-04-27 01:32:08"
      },
      {
      id: 4,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328818.png",
      created_at: "2019-04-27 01:33:38",
      updated_at: "2019-04-27 01:33:38"
      },
      {
      id: 5,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328828.png",
      created_at: "2019-04-27 01:33:48",
      updated_at: "2019-04-27 01:33:48"
      },
      {
      id: 6,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328834.png",
      created_at: "2019-04-27 01:33:54",
      updated_at: "2019-04-27 01:33:54"
      },
      {
      id: 7,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328868.png",
      created_at: "2019-04-27 01:34:28",
      updated_at: "2019-04-27 01:34:28"
      },
      {
      id: 8,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328879.png",
      created_at: "2019-04-27 01:34:39",
      updated_at: "2019-04-27 01:34:39"
      },
      {
      id: 9,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328891.png",
      created_at: "2019-04-27 01:34:51",
      updated_at: "2019-04-27 01:34:51"
      },
      {
      id: 10,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328903.png",
      created_at: "2019-04-27 01:35:03",
      updated_at: "2019-04-27 01:35:03"
      },
      {
      id: 11,
      drawname_id: 1,
      draw: "https://jaipun.com/draw/1556328918.png",
      created_at: "2019-04-27 01:35:18",
      updated_at: "2019-04-27 01:35:18"
      },
      {
      id: 12,
      drawname_id: 2,
      draw: "https://jaipun.com/draw/1556337108.png",
      created_at: "2019-04-27 03:51:48",
      updated_at: "2019-04-27 03:51:48"
      },
      {
      id: 13,
      drawname_id: 2,
      draw: "https://jaipun.com/draw/1556337123.png",
      created_at: "2019-04-27 03:52:03",
      updated_at: "2019-04-27 03:52:03"
      },
      {
      id: 14,
      drawname_id: 2,
      draw: "https://jaipun.com/draw/1556337131.png",
      created_at: "2019-04-27 03:52:11",
      updated_at: "2019-04-27 03:53:59"
      },
      {
      id: 15,
      drawname_id: 8,
      draw: "https://jaipun.com/draw/1556337256.png",
      created_at: "2019-04-27 03:54:16",
      updated_at: "2019-05-26 13:13:32"
      },
      {
      id: 16,
      drawname_id: 8,
      draw: "https://jaipun.com/draw/1556337268.png",
      created_at: "2019-04-27 03:54:28",
      updated_at: "2019-05-26 13:13:37"
      },
      {
      id: 17,
      drawname_id: 2,
      draw: "https://jaipun.com/draw/1556337277.png",
      created_at: "2019-04-27 03:54:37",
      updated_at: "2019-06-15 10:42:39"
      },
      {
      id: 18,
      drawname_id: 8,
      draw: "https://jaipun.com/draw/1556337285.png",
      created_at: "2019-04-27 03:54:45",
      updated_at: "2019-05-26 13:13:46"
      },
      {
      id: 19,
      drawname_id: 9,
      draw: "https://jaipun.com/draw/1556337303.png",
      created_at: "2019-04-27 03:55:03",
      updated_at: "2019-05-26 13:14:19"
      },
      {
      id: 20,
      drawname_id: 9,
      draw: "https://jaipun.com/draw/1556337309.png",
      created_at: "2019-04-27 03:55:09",
      updated_at: "2019-05-26 13:14:23"
      },
      {
      id: 21,
      drawname_id: 9,
      draw: "https://jaipun.com/draw/1556337317.png",
      created_at: "2019-04-27 03:55:17",
      updated_at: "2019-05-26 13:14:29"
      },
      {
      id: 22,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337542.png",
      created_at: "2019-04-27 03:59:02",
      updated_at: "2019-05-22 13:21:22"
      },
      {
      id: 23,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337546.png",
      created_at: "2019-04-27 03:59:06",
      updated_at: "2019-05-22 13:21:39"
      },
      {
      id: 24,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337549.png",
      created_at: "2019-04-27 03:59:09",
      updated_at: "2019-05-22 13:21:41"
      },
      {
      id: 25,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337559.png",
      created_at: "2019-04-27 03:59:19",
      updated_at: "2019-05-22 13:21:43"
      },
      {
      id: 26,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337563.png",
      created_at: "2019-04-27 03:59:23",
      updated_at: "2019-05-22 13:21:44"
      },
      {
      id: 27,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337567.png",
      created_at: "2019-04-27 03:59:27",
      updated_at: "2019-05-22 13:24:14"
      },
      {
      id: 28,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337583.png",
      created_at: "2019-04-27 03:59:43",
      updated_at: "2019-05-22 13:24:16"
      },
      {
      id: 29,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337586.png",
      created_at: "2019-04-27 03:59:46",
      updated_at: "2019-05-22 13:24:19"
      },
      {
      id: 30,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337597.png",
      created_at: "2019-04-27 03:59:57",
      updated_at: "2019-05-22 13:26:21"
      },
      {
      id: 31,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337622.png",
      created_at: "2019-04-27 04:00:22",
      updated_at: "2019-04-27 04:00:22"
      },
      {
      id: 32,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337626.png",
      created_at: "2019-04-27 04:00:26",
      updated_at: "2019-04-27 04:00:26"
      },
      {
      id: 33,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337630.png",
      created_at: "2019-04-27 04:00:30",
      updated_at: "2019-04-27 04:00:30"
      },
      {
      id: 34,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337633.png",
      created_at: "2019-04-27 04:00:33",
      updated_at: "2019-04-27 04:00:33"
      },
      {
      id: 35,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337637.png",
      created_at: "2019-04-27 04:00:37",
      updated_at: "2019-04-27 04:00:37"
      },
      {
      id: 36,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337642.png",
      created_at: "2019-04-27 04:00:42",
      updated_at: "2019-05-22 13:27:14"
      },
      {
      id: 37,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337652.png",
      created_at: "2019-04-27 04:00:52",
      updated_at: "2019-04-27 04:00:52"
      },
      {
      id: 38,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337665.png",
      created_at: "2019-04-27 04:01:05",
      updated_at: "2019-04-27 04:01:05"
      },
      {
      id: 39,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337674.png",
      created_at: "2019-04-27 04:01:14",
      updated_at: "2019-04-27 04:01:14"
      },
      {
      id: 40,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337678.png",
      created_at: "2019-04-27 04:01:18",
      updated_at: "2019-04-27 04:01:18"
      },
      {
      id: 41,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337681.png",
      created_at: "2019-04-27 04:01:21",
      updated_at: "2019-04-27 04:01:21"
      },
      {
      id: 42,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337689.png",
      created_at: "2019-04-27 04:01:29",
      updated_at: "2019-04-27 04:01:29"
      },
      {
      id: 43,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337693.png",
      created_at: "2019-04-27 04:01:33",
      updated_at: "2019-04-27 04:01:33"
      },
      {
      id: 44,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337697.png",
      created_at: "2019-04-27 04:01:37",
      updated_at: "2019-04-27 04:01:37"
      },
      {
      id: 45,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337709.png",
      created_at: "2019-04-27 04:01:49",
      updated_at: "2019-04-27 04:01:49"
      },
      {
      id: 46,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337716.png",
      created_at: "2019-04-27 04:01:56",
      updated_at: "2019-05-22 13:26:49"
      },
      {
      id: 47,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337720.png",
      created_at: "2019-04-27 04:02:00",
      updated_at: "2019-04-27 04:02:00"
      },
      {
      id: 48,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337732.png",
      created_at: "2019-04-27 04:02:12",
      updated_at: "2019-04-27 04:02:12"
      },
      {
      id: 49,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337738.png",
      created_at: "2019-04-27 04:02:18",
      updated_at: "2019-04-27 04:02:18"
      },
      {
      id: 50,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337752.png",
      created_at: "2019-04-27 04:02:32",
      updated_at: "2019-05-22 13:26:52"
      },
      {
      id: 51,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337758.png",
      created_at: "2019-04-27 04:02:38",
      updated_at: "2019-04-27 04:02:38"
      },
      {
      id: 52,
      drawname_id: 7,
      draw: "https://jaipun.com/draw/1556337771.png",
      created_at: "2019-04-27 04:02:51",
      updated_at: "2019-05-23 12:35:13"
      },
      {
      id: 53,
      drawname_id: 7,
      draw: "https://jaipun.com/draw/1556337775.png",
      created_at: "2019-04-27 04:02:55",
      updated_at: "2019-05-23 12:35:10"
      },
      {
      id: 54,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337778.png",
      created_at: "2019-04-27 04:02:58",
      updated_at: "2019-04-27 04:02:58"
      },
      {
      id: 55,
      drawname_id: 7,
      draw: "https://jaipun.com/draw/1556337782.png",
      created_at: "2019-04-27 04:03:02",
      updated_at: "2019-05-23 12:35:07"
      },
      {
      id: 56,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337786.png",
      created_at: "2019-04-27 04:03:06",
      updated_at: "2019-04-27 04:03:06"
      },
      {
      id: 57,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337794.png",
      created_at: "2019-04-27 04:03:14",
      updated_at: "2019-04-27 04:03:14"
      },
      {
      id: 58,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337798.png",
      created_at: "2019-04-27 04:03:18",
      updated_at: "2019-05-22 13:26:58"
      },
      {
      id: 59,
      drawname_id: 7,
      draw: "https://jaipun.com/draw/1556337803.png",
      created_at: "2019-04-27 04:03:23",
      updated_at: "2019-05-23 12:35:05"
      },
      {
      id: 60,
      drawname_id: 7,
      draw: "https://jaipun.com/draw/1556337807.png",
      created_at: "2019-04-27 04:03:28",
      updated_at: "2019-05-23 12:35:01"
      },
      {
      id: 61,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337811.png",
      created_at: "2019-04-27 04:03:31",
      updated_at: "2019-04-27 04:03:31"
      },
      {
      id: 62,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337815.png",
      created_at: "2019-04-27 04:03:35",
      updated_at: "2019-04-27 04:03:35"
      },
      {
      id: 63,
      drawname_id: 6,
      draw: "https://jaipun.com/draw/1556337819.png",
      created_at: "2019-04-27 04:03:39",
      updated_at: "2019-04-27 04:03:39"
      },
      {
      id: 64,
      drawname_id: 3,
      draw: "https://jaipun.com/draw/1556337823.png",
      created_at: "2019-04-27 04:03:43",
      updated_at: "2019-05-22 13:27:03"
      },
  ]
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
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
