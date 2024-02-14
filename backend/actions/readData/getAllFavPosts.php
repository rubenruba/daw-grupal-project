<?php
    include '../../variables.php';

    $userId = $_GET['userId'];
    
    // session_start();
    // $userId = $_SESSION['userId'];

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query(
            "SELECT * FROM `Post` 
                INNER JOIN `Favorite` ON `Post`.`PostId` = `Favorite`.`PostId` 
                LEFT JOIN `LabelPost` ON `Post`.`PostId` = `LabelPost`.`PostId`
                LEFT JOIN `Label` ON `LabelPost`.`LabelId` = `Label`.`LabelId`
                WHERE `Favorite`.`UserId` = '$userId';
        ");

        $posts = array();

        while ($row = $dbQuery->fetch(PDO::FETCH_ASSOC)) {
            $postId = $row['PostId'];
            if (!isset($posts[$postId])) {
                $posts[$postId] = array(
                    'PostId' => $row['PostId'],
                    'Title' => $row['Title'],
                    'Text' => $row['Text'],
                    'IsFavorite' => 1, 
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
        
        $posts = array_values($posts);
        
        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization");

        $db = null;
        $dbQuery = null;
        
        echo json_encode($posts);

    } catch (PDOException $e){
        echo $e;
    }
?>