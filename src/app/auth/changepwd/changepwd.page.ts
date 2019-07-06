import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.page.html',
  styleUrls: ['./changepwd.page.scss'],
})
export class ChangepwdPage implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }
  changepwd(form) {
    //this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('');
    //});
  }

}
