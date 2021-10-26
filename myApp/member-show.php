<?php
    include("config/autoload.php");

    $anm_id = $REQUEST->anm_id;

    $sql = "SELECT *
     FROM animal
     INNER JOIN price
     ON animal.anm_category = price.p_id WHERE anm_id='".$anm_id."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));
