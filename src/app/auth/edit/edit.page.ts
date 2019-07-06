import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item={
    id:"1",
    email:"punyaartwork@gmail.com",
    name:"tester",
    detail:"ผู้ทดลองแอพ",
    profile:"https://www.trueprofile.com/wp-content/uploads/2017/07/profile-time.jpg",
    cards:1,
    following:4,
    followers:2,
  };
  constructor(private  router:  Router) { }

  ngOnInit() {
  }

  edit(form) {
    //this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('app/tabs/more');
    //});
  }

}
