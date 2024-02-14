<?php
    include './variables.php';

    $userId = $_GET['userId'];

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el userId
        $dbQuery = $db->query("SELECT * FROM `User` WHERE `UserId` = '$userId'");
        $user = $dbQuery->fetchAll(); 
        $user = $user[0];

        if($user['Admin'] === 1) {
            echo json_encode(true);
        } else {
            echo json_encode(false);
        }
        
        $db = null;
        $dbQuery = null;
        

    } catch (PDOException $e){
        echo $e;
    }
    
    header("Content-type: application/json;charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization");
?>