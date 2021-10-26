<?php
    include("config/autoload.php");

    $anm_id = $DATABASE->QueryMaxId("wait", "anm_id");
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
    $user_id = @$REQUEST->user_id;

    $sql = "
    INSERT INTO wait (
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
        "msg"=>"[บันทึกข้อมูลเรียบร้อย]"
    ));
