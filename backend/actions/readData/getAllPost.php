<?php
    include '../../variables.php';

    $userId = $_GET['userId'];

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query(
            "SELECT 
                `Post`.*, 
                CASE WHEN `Favorite`.`PostId` IS NOT NULL THEN 1 ELSE 0 END AS `IsFavorite`,
                `Label`.*
            FROM `Post`
            LEFT JOIN `Favorite` ON `Post`.`PostId` = `Favorite`.`PostId` AND `Favorite`.`UserId` = '$userId'
            LEFT JOIN `LabelPost` ON `Post`.`PostId` = `LabelPost`.`PostId`
            LEFT JOIN `Label` ON `LabelPost`.`LabelId` = `Label`.`LabelId`;
        ");

        $posts = array();

        while ($row = $dbQuery->fetch(PDO::FETCH_ASSOC)) {
            $postId = $row['PostId'];
            if (!isset($posts[$postId])) {
                $posts[$postId] = array(
                    'PostId' => $row['PostId'],
                    'Title' => $row['Title'],
                    'Text' => $row['Text'],
                    'IsFavorite' => $row['IsFavorite'],
                    'Labels' => array()
                );
            }
            if (!empty($row['LabelId'])) {
                $posts[$postId]['Labels'][] = array(
                    'LabelId' => $row['LabelId'],
                    'Name' => $row['Name']
                );
            }
        }

        // Convertir el array asociativo en un array indexado
        $posts = array_values($posts);

        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $db = null;
        $dbQuery = null;

        echo json_encode($posts);

    } catch (PDOException $e){
        echo $e;
    }
?>
