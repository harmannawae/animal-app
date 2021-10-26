<?php
    include("config/autoload.php");

    $sql = "
    SELECT COUNT(anm_id) AS report
FROM animal_deposit;
";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));