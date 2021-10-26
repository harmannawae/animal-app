<?php
    include("config/autoload.php");

    $user_id = $DATABASE->QueryMaxId("user", "user_id");
    $user_email = $REQUEST->user_email;
    $user_password = $REQUEST->user_password;
    $user_name = $REQUEST->user_name;
    $user_sname = $REQUEST->user_sname;
    $user_birthday = $REQUEST->user_birthday;
    $user_address = $REQUEST->user_address;
    $user_phone = $REQUEST->user_phone;
    $user_id_number = $REQUEST->user_id_number;
    $sql = "
        INSERT INTO user (
            user_id,
            user_email,
            user_password,
            user_name,
            user_sname, 
            user_birthday,
            user_address,
            user_phone,
            user_id_number,
            user_type
        ) VALUES (
            '".$user_id."',
            '".$user_email."',
            '".$user_password."',
            '".$user_name."',
            '".$user_sname."',
            '".$user_birthday."',
            '".$user_address."',
            '".$user_phone."',
            '".$user_id_number."',
            'user'
        )
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"สมัครสมาชิกสำเร็จ"
    ));
