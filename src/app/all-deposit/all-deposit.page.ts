import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-all-deposit',
  templateUrl: './all-deposit.page.html',
  styleUrls: ['./all-deposit.page.scss'],
})
export class AllDepositPage implements OnInit {
  animals = [];
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }
  ngOnInit() {   
  }
  async ionViewDidEnter() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "all-deposit.php", {
    }, true).then((res: any) => {
      this.animals = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.showConfirm('คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?').then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "member-del.php", {
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