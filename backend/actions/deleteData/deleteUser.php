<?php
    include '../../variables.php';

    $userId = $_GET['userId'];

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "DELETE FROM `User` WHERE `UserId` = '$userId'";
        $a = $db->query($dbQuery);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");


        $db = null;
        $dbQuery = null;

    } catch (PDOException $e){  
        echo $e;
    }
?>