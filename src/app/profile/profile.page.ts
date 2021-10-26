import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user_email = "";
  user_name = "";
  user_sname = "";
  user_birthday = "";
  user_address = "";
  user_phone = "";
  user_id_number = "";
  constructor(
    public session: SessionService,
    private router: Router,
  ) { }
  async ngOnInit() {
    this.user_email = await this.session.getStorage("user_email");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "profile.php", {
      user_email: this.user_email
    }, true).then((res: any) => {
      this.user_name = res.data.user_name;
      this.user_sname = res.data.user_sname;
      this.user_birthday = res.data.user_birthday;
      this.user_address = res.data.user_address;
      this.user_phone = res.data.user_phone;
      this.user_id_number = res.data.user_id_number;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async logout() {
    this.session.showConfirm("คุณแน่ใจต้องการออกจากระบบใช่หรือไม่ ?").then(async rs => {
      if (rs) {
        await this.session.removeStorage("user_id");
        await this.session.removeStorage("user_type");
        await this.session.removeStorage("user_email");
        await this.session.removeStorage("user_password");
        this.router.navigateByUrl('/login', { replaceUrl: true }); // ให้วิ่งไปยังหน้า login ใหม่
      }
    });
  }
}
