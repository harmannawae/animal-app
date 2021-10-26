import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
})
export class MemberAddPage implements OnInit {
  name = "";
  category = "";
  age = "";
  species = "";
  special_features = "";
  gender = "";
  color = "";
  favorite_food = "";
  food_allergy = "";
  character = "";
  talent = "";
  congenital_disease = "";
  more = "";
  p_id = "";
  user_id = "";
  types = [];
  constructor(
    private router: Router,
    public session: SessionService
  ) { }
  async ngOnInit() {
    this.loadData();
    this.user_id = await this.session.getStorage("user_id");
  }
  loadData() {
    this.session.ajax(this.session.api + "product-get.php", {}, true).then((res: any) => {
      this.types = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "member-add.php", {
      anm_name: this.name,
      anm_category: this.category,
      anm_age: this.age,
      anm_species: this.species,
      anm_special_features: this.special_features,
      anm_gender: this.gender,
      anm_color: this.color,
      anm_favorite_food: this.favorite_food,
      anm_food_allergy: this.food_allergy,
      anm_character: this.character,
      anm_talent: this.talent,
      anm_congenital_disease: this.congenital_disease,
      anm_more: this.more,
      user_id: this.user_id
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        if( res.status==true ) this.router.navigateByUrl('/member');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}