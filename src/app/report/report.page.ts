import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  reports_animal = [];
  reports_animal_deposit = [];
  reports_user = [];
  reports_wait = [];
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
    this.session.ajax(this.session.api + "report-animal.php", {
    }, true).then((res: any) => {
      this.reports_animal = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
    this.session.ajax(this.session.api + "report-animal_deposit.php", {
    }, true).then((res: any) => {
      this.reports_animal_deposit = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
    this.session.ajax(this.session.api + "report-user.php", {
    }, true).then((res: any) => {
      this.reports_user = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
    this.session.ajax(this.session.api + "report-wait.php", {
    }, true).then((res: any) => {
      this.reports_wait = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  
}
