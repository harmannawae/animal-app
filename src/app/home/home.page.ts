import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user_type;
  constructor(
    private router: Router,
    public session: SessionService
  ) {

  }
  goToProfile() {
    this.router.navigateByUrl('/profile');
  }


  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}
