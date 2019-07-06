import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-drawstore',
  templateUrl: './drawstore.page.html',
  styleUrls: ['./drawstore.page.scss'],
})
export class DrawstorePage implements OnInit {

  filmId = null;
  item={
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
 
  constructor(private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
