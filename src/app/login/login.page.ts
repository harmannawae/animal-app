import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user_email = "areefin.064@gmail.com";
  user_password = "123456789";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {
    // alert(this.username);
    // alert(this.password);
    this.session.ajax(this.session.api + "login.php", {
      user_email: this.user_email,
      user_password: this.user_password
    }, true).then(async (res: any) => {
      if (res.status) {
        await this.session.setStorage("user_id", res.data.user_id);
        await this.session.setStorage("user_type", res.data.user_type);
        await this.session.setStorage("user_email", this.user_email);
        await this.session.setStorage("user_password", this.user_password);
        this.router.navigateByUrl('/home', { replaceUrl: true }); // เมื่อ login สำเร็จ ให้วิ่งไปยังหน้า home
      } else {
        this.session.showAlert("เข้าสู่ระบบไม่สำเร็จ");
      }
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  goToregister() {
    this.router.navigateByUrl('/register');
  
  }
  
}
