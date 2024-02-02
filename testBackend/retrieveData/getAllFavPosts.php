<?php
    include '../variables.php';

    session_start();
    // $userId = $_SESSION['userId'];
    $userId = 1;

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query("SELECT * FROM `Post` INNER JOIN `Favorite` ON `Post`.`PostId` = `Favorite`.`PostId` WHERE `Favorite`.`UserId` = '$userId'");
        $posts = $dbQuery->fetchAll(); // Todos los posts
        $posts = json_encode($posts);
        
        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization");

        
        $db = null;
        $dbQuery = null;
        
        echo $posts;

    } catch (PDOException $e){
        echo $e;
    }
?>