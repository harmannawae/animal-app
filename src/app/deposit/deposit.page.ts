import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {  id = "";
name = "";
category = "";
p_category = "";
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
deposit_date = "";
Deposit_time = "";
pick_up_date = "";
pick_up_time = "";
day = "";
user_id = "";
constructor(
  private route: ActivatedRoute,
  public session: SessionService,
  private router: Router,
) {
  this.id = this.route.snapshot.paramMap.get("id");
}
  async ngOnInit() {
  this.loadData();
}
loadData() {
  this.session.ajax(this.session.api + "load_wait.php", {
    anm_id: this.id
  }, true).then((res: any) => {
    this.id = res.data.anm_id;
    this.name = res.data.anm_name;
    this.category = res.data.anm_category;
    this.p_category = res.data.p_category;
    this.age = res.data.anm_age;
    this.species = res.data.anm_species;
    this.special_features = res.data.anm_special_features;
    this.gender = res.data.anm_gender;
    this.color = res.data.anm_color;
    this.favorite_food = res.data.anm_favorite_food;
    this.food_allergy = res.data.anm_food_allergy;
    this.character = res.data.anm_character;
    this.talent = res.data.anm_talent;
    this.congenital_disease = res.data.anm_congenital_disease;
    this.more = res.data.anm_more;
    this.user_id = res.data.user_id;
  }).catch(err => {
    this.session.showAlert(err);
  });
}
save() {
  this.session.ajax(this.session.api + "deposit.php", {
    anm_id: this.id,
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
    anm_deposit_date: this.deposit_date,
    anm_Deposit_time: this.Deposit_time,
    anm_pick_up_date: this.pick_up_date,
    anm_pick_up_time: this.pick_up_time,
    anm_day: this.day,
    user_id: this.user_id
  }, true).then((res: any) => {
    this.session.showAlert(res.msg).then(rs => {
      this.router.navigateByUrl('/list');
    });
  }).catch(err => {
    this.session.showAlert(err);
  });
}
}
