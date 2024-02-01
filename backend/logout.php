<?php
    session_start();

    if(isset($_SESSION['userId'])){
        unset($_SESSION['userId']);
        session_destroy();
    }

    header("Content-type: application/json;charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization");
?>