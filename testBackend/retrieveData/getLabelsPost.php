<?php
    include '../variables.php';

    session_start();
    $postId = 1;

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query("SELECT * FROM `Label` INNER JOIN `LabelPost` ON `Label`.`PostId` = `LabelPost`.`PostId` WHERE `Label`.`PostId` = '$postId'");
        $labels = $dbQuery->fetchAll(); // Todos los labels
        
        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization");

        $db = null;
        $dbQuery = null;
        
        echo json_encode($labels);

    } catch (PDOException $e){
        echo $e;
    }
?>