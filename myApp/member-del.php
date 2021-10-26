<?php
    include("config/autoload.php");

    $anm_id = $REQUEST->anm_id;
    $sql = "
        DELETE FROM animal WHERE anm_id='".$anm_id."'
    ";
    $obj = $DATABASE->Query($sql);

    echo json_encode(array(
        "status"=>true,
        "msg"=>"ลบข้อมูลแล้ว"
    ));
