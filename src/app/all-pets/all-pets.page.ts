import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.page.html',
  styleUrls: ['./all-pets.page.scss'],
})
export class AllPetsPage implements OnInit {  
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
    this.session.ajax(this.session.api + "all-pets.php", {
      user_id: this.user_id
    }, true).then((res: any) => {
      this.animals = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.showConfirm('คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?').then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "animal-del.php", {
          anm_id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    });
  }
}
