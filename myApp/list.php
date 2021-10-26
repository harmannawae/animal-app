<?php
    include("config/autoload.php");

    $user_id = @$REQUEST->user_id;

    $sql = "SELECT *
     FROM wait
     INNER JOIN price
     ON wait.anm_category = price.p_id";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));