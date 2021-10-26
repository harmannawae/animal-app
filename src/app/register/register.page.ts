import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email = "";
  password = "";
  name = "";
  sname = "";
  birthday = "";
  address = "";
  phone = "";
  id_number = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "register.php", {
      user_email: this.email,
      user_password: this.password,
      user_name: this.name,
      user_sname: this.sname,
      user_birthday: this.birthday,
      user_address: this.address,
      user_phone: this.phone,
      user_id_number: this.id_number
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/login');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });

  }
}
