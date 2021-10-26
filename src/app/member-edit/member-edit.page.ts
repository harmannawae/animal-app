import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  id = "";
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
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
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
      this.species = res.data.anm_species
      this.special_features = res.data.anm_special_features;
      this.gender = res.data.anm_gender;
      this.color = res.data.anm_color;
      this.favorite_food = res.data.anm_favorite_food;
      this.food_allergy = res.data.anm_food_allergy;
      this.character = res.data.anm_character;
      this.talent = res.data.anm_talent;
      this.congenital_disease = res.data.anm_congenital_disease;
      this.more = res.data.anm_more;

    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  edit() {
    this.session.ajax(this.session.api + "member-edit.php", {
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
      anm_more: this.more
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/member');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
