<?php
    include("config/autoload.php");

    $user_email = $REQUEST->user_email;
    $user_password = $REQUEST->user_password;

    $sql = "SELECT * FROM user WHERE user_email='".$user_email."' AND user_password='".$user_password."' ";
    $obj = $DATABASE->QueryObj($sql);
    if( sizeof($obj)==1 ) {
        echo json_encode(array(
            "status"=>true,
            "data"=>$obj[0]
        ));
    } else {
        echo json_encode(array(
            "status"=>false
        ));
    }
