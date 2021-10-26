<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;

    $sql = "SELECT *
     FROM animal
     INNER JOIN price
     ON animal.anm_category = price.p_id WHERE user_id='".$user_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));
