<?php
    include '../variables.php';

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query("SELECT * FROM `Label`");
        $labels = $dbQuery->fetchAll(); // Todos los labels
        $labels = json_encode($labels);
        
        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");


        $db = null;
        $dbQuery = null;

        echo $labels;

    } catch (PDOException $e){
        echo $e;
    }
?>