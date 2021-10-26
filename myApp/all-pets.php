<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;

    $sql = "
    SELECT 
        animal_deposit.*,
        price.*,
        animal_deposit.anm_day*price.p_price AS total 
    FROM animal_deposit 
        INNER JOIN price ON price.p_id=animal_deposit.anm_category
    WHERE animal_deposit.user_id='".$user_id."'
";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));
