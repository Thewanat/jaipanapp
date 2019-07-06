import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  constructor() { }
item={
user:{
  id:"1",
  name:"por_por",
  detail:"นักวาดหน้าใส",
  profile:"https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-cartoon-beauty-short-hair-girl-download-image_1184031.jpg",
},
body:"very Good!!",
commentTime:"12 Jan 2012",
};
  ngOnInit() {
  }

}
