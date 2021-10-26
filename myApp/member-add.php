<?php
    include("config/autoload.php");

    $anm_id = $DATABASE->QueryMaxId("animal", "anm_id");
    $anm_name = @$REQUEST->anm_name;
    $anm_category = @$REQUEST->anm_category;
    $anm_age = @$REQUEST->anm_age;
    $anm_species = @$REQUEST->anm_species;
    $anm_special_features = @$REQUEST->anm_special_features;
    $anm_gender = @$REQUEST->anm_gender;
    $anm_color = @$REQUEST->anm_color;
    $anm_favorite_food = @$REQUEST->anm_favorite_food;
    $anm_food_allergy = @$REQUEST->anm_food_allergy;
    $anm_character = @$REQUEST->anm_character;
    $anm_talent = @$REQUEST->anm_talent;
    $anm_congenital_disease = @$REQUEST->anm_congenital_disease;
    $anm_more = @$REQUEST->anm_more;
    $user_id = @$REQUEST->user_id;

    CheckValue($anm_name, "คุณยังไม่ได้ป้อนชื่อสัตว์เลี้ยง");
    CheckValue($anm_category, "คุณยังไม่ได้ป้อนประเภทสัตว์เลี้ยง");
    CheckValue($anm_age, "คุณยังไม่ได้ป้อนอายุสัตว์เลี้ยง");
    CheckValue($anm_special_features, "คุณยังไม่ได้ป้อนลักษณะพิเศษสัตว์เลี้ยง");
    CheckValue($anm_congenital_disease, "คุณยังไม่ได้ป้อนโรคประจำตัวสัตว์เลี้ยง");
    CheckValue($user_id, "ไม่พบ user_id");

    $sql = "
        INSERT INTO animal (
            anm_id,
            anm_name,
            anm_category,
            anm_age,
            anm_species,
            anm_special_features,
            anm_gender,
            anm_color, 
            anm_favorite_food, 
            anm_food_allergy, 
            anm_character, 
            anm_talent,
            anm_congenital_disease,
            anm_more,
            user_id
        ) VALUES (
            '".$anm_id."',
            '".$anm_name."',
            '".$anm_category."',
            '".$anm_age."',
            '".$anm_species."',
            '".$anm_special_features."',
            '".$anm_gender."',
            '".$anm_color."',
            '".$anm_favorite_food."',
            '".$anm_food_allergy."',
            '".$anm_character."',
            '".$anm_talent."',
            '".$anm_congenital_disease."',
            '".$anm_more."',
            '".$user_id."'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลงทะเบียนสัตว์เลี้ยงสำเร็จแล้ว"
    ));
