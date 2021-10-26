import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-show',
  templateUrl: './member-show.page.html',
  styleUrls: ['./member-show.page.scss'],
})
export class MemberShowPage implements OnInit {
  id = "";
  name = "";
  category = "";
  age = "";
  special_features = "";
  congenital_disease = "";
  deposit_date = "";
  Deposit_time = "";
  pick_up_date = "";
  pick_up_time = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "member-show.php", {
      anm_id: this.id
    }, true).then((res: any) => {
      this.id = res.data.anm_id;
      this.name = res.data.anm_name;
      this.category = res.data.anm_category;
      this.age = res.data.anm_age;
      this.special_features = res.data.anm_special_features;
      this.congenital_disease = res.data.anm_congenital_disease;
      this.deposit_date = res.data.anm_deposit_date;
      this.Deposit_time = res.data.anm_Deposit_time;
      this.pick_up_date = res.data.anm_pick_up_date;
      this.pick_up_time = res.data.anm_pick_up_time;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
