import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  items=[
    { 
      id:1,drawname:"family",
      drawTag:"https://jaipun.com/drawtag/1558875866.png" ,
      user:{
        name:"jaipun"
      }
    },
    { 
      id:2,
      drawname:"ordination",
      drawTag:"https://jaipun.com/drawtag/1558876077.png" ,
      user:{
        name:"jaipun"
      }
    },
    { 
      id:3,
      drawname:"health",
      drawTag:"https://jaipun.com/drawtag/1558531431.png" ,
      user:{
        name:"jaipun"
      }
    },
    { 
      id:4,
      drawname:"lovely",
      drawTag:"https://jaipun.com/drawtag/1558613946.png" ,
      user:{
        name:"jaipun"
      }
    },
    { 
      id:5,
      drawname:"happiness",
      drawTag:"https://jaipun.com/drawtag/1560922934.png" ,
      user:{
        name:"jaipun"
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
