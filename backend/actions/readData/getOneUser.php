<?php
    include '../../variables.php';

    // session_start();
    // $userId = $_SESSION['userId'];
    $username = $_GET['username'];
    
    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = $db->query(
            "SELECT `UserId`, `Name`, `Surname`, `Email`, `Username`
            FROM  `User`
            WHERE `User`.`Username` = '$username';"
        );

        $user = array();

        while ($row = $dbQuery->fetch(PDO::FETCH_ASSOC)) {
            $user[] = $row;
        }

        $db = null;
        $dbQuery = null;

        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        
        echo json_encode(array_values($user));

    } catch (PDOException $e){
        echo $e;
    }
?>