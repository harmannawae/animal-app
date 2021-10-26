import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.page.html',
  styleUrls: ['./wait.page.scss'],
})
export class WaitPage implements OnInit {
  animals = [];
  user_id = "";
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }
  ngOnInit() {   
  }
  async ionViewDidEnter() {
    this.user_id = await this.session.getStorage("user_id");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "wait.php", {
      user_id: this.user_id
    }, true).then((res: any) => {
      this.animals = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
