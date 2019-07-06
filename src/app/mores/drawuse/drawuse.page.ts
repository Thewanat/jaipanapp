import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawuse',
  templateUrl: './drawuse.page.html',
  styleUrls: ['./drawuse.page.scss'],
})
export class DrawusePage implements OnInit {

  constructor() { }

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
        name:"่jaipun",
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
  ngOnInit() {
  }

}
