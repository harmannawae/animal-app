<?php
    include("config/autoload.php");

    $sql = "
    SELECT COUNT(user_id) AS report
FROM user;
";
    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "datas"=>$obj
    ));