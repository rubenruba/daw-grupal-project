<?php
    include '../variables.php';

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        // $dbQuery = $db->query("SELECT * FROM `User` WHERE `Admin` = 0");
        
        $dbQuery = $db->query(
            "SELECT 
                `User`.`UserId`, `User`.`Email` AS `UserEmail`, `User`.`Username`,
                `Post`.`PostId`, `Post`.`Title` AS `PostTitle`,
                `Comment`.`CommentId`, `Comment`.`Text` AS `CommentText`, `Comment`.`PostId` AS `CommentPostId`
            FROM  `User`
            LEFT JOIN `Post` ON `User`.`UserId` = `Post`.`UserId`
            LEFT JOIN `Comment` ON `User`.`UserId` = `Comment`.`UserId`;"
        );
            // WHERE `User`.`Admin` = '0';"

        $users = array();

        while ($row = $dbQuery->fetch(PDO::FETCH_ASSOC)) {
            $userId = $row['UserId'];

            // Si el usuario no está en el array, lo agrega
            if (!isset($users[$userId])) {
                $users[$userId] = array(
                    'userId' => $userId,
                    'email' => $row['UserEmail'],
                    'username' => $row['Username'],
                    'posts' => array(),
                    'comments' => array()
                );
            }

            // Agrega los posts del usuario al array correspondiente
            if (!empty($row['PostId'])) {
                $users[$userId]['posts'][] = array(
                    'postId' => $row['PostId'],
                    'title' => $row['PostTitle'],
                );
            }

            // Agrega los comentarios del usuario al array correspondiente
            if (!empty($row['CommentId'])) {
                $users[$userId]['comments'][] = array(
                    'commentId' => $row['CommentId'],
                    'text' => $row['CommentText'],
                    'postId' => $row['CommentPostId']
                );
            }
        }

        $db = null;
        $dbQuery = null;

        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        
        echo json_encode(array_values($users));

    } catch (PDOException $e){
        echo $e;
    }
?>