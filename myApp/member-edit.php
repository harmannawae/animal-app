<?php
    include("config/autoload.php");

    $anm_id = $REQUEST->anm_id;
    $anm_name = $REQUEST->anm_name;
    $anm_category= $REQUEST->anm_category;
    $anm_age = $REQUEST->anm_age;
    $anm_species = $REQUEST->anm_species;
    $anm_special_features = $REQUEST->anm_special_features;
    $anm_gender = $REQUEST->anm_gender;
    $anm_color = $REQUEST->anm_color;
    $anm_favorite_food = $REQUEST->anm_favorite_food;
    $anm_food_allergy = $REQUEST->anm_food_allergy;
    $anm_character = $REQUEST->anm_character;
    $anm_talent = $REQUEST->anm_talent;
    $anm_congenital_disease = $REQUEST->anm_congenital_disease;
    $anm_more = $REQUEST->anm_more;
    $sql = "
        UPDATE animal SET
        anm_name='".$anm_name."',
        anm_category='".$anm_category."',
        anm_age='".$anm_age."',
        anm_species='".$anm_species."',
        anm_special_features='".$anm_special_features."',
        anm_gender='".$anm_gender."',
        anm_color='".$anm_color."',
        anm_favorite_food='".$anm_favorite_food."',
        anm_food_allergy='".$anm_food_allergy."',
        anm_character='".$anm_character."',
        anm_talent='".$anm_talent."',
        anm_congenital_disease='".$anm_congenital_disease."',
        anm_more='".$anm_more."'
        WHERE anm_id='".$anm_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"แก้ไขข้อมูลแล้ว"
    ));
