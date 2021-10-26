<?php
    include("config/autoload.php");

    $user_email = $REQUEST->user_email;

    $sql = "SELECT * FROM user WHERE user_email='".$user_email."' ";

    $obj = $DATABASE->QueryObj($sql);

    echo json_encode(array(
        "status"=>true,
        "data"=>$obj[0]
    ));