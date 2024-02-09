<?php
    include '../variables.php';

    $postId = $_GET['postId'];

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = $db->query(
            "SELECT 
                `Post`.`PostId`, `Post`.`UserId` AS `PostUserId` , `Post`.`Title` AS `PostTitle`, `Post`.`Text` AS `PostText`, `Post`.`Date` AS `PostDate` ,
                `File`.`FileId`, `File`.`Type` AS `FileType`, `File`.`Name` AS `FileName`, 
                `Comment`.`CommentId`, `Comment`.`UserId` AS `CommentUserId` , `Comment`.`Text` AS `CommentText`, `Comment`.`Date` AS `CommentDate`,
                `Label`.*
            FROM `Post`
            LEFT JOIN `File` ON `Post`.`PostId` = `File`.`PostId`
            LEFT JOIN `Comment` ON `Post`.`PostId` = `Comment`.`PostId`
            LEFT JOIN `LabelPost` ON `Post`.`PostId` = `LabelPost`.`PostId`
            LEFT JOIN `Label` ON `LabelPost`.`LabelId` = `Label`.`LabelId`
            WHERE `Post`.`PostId` = '$postId';"
        );

        $post = array();

        while ($row = $dbQuery->fetch(PDO::FETCH_ASSOC)) {
            if (!isset($post['post'])) {
                $post['post'] = array(
                    'PostId' => $row['PostId'],
                    'PostUserId' => $row['PostUserId'],
                    'PostTitle' => $row['PostTitle'],
                    'PostText' => $row['PostText'],
                    'PostDate' => $row['PostDate'],
                    'Files' => array(),
                    'Comments' => array(),
                    'Labels' => array()
                );
            }

            if (!empty($row['FileId'])) {
                $post['post']['Files'][] = array(
                    'FileId' => $row['FileId'],
                    'FileType' => $row['FileType'],
                    'FileName' => $row['FileName']
                );
            }

            if (!empty($row['CommentId'])) {
                $post['post']['Comments'][] = array(
                    'CommentId' => $row['CommentId'],
                    'CommentUserId' => $row['CommentUserId'],
                    'CommentText' => $row['CommentText'],
                    'CommentDate' => $row['CommentDate']
                );
            }

            if (!empty($row['LabelId'])) {
                $post['post']['Labels'][] = array(
                    'LabelId' => $row['LabelId'],
                    'Name' => $row['Name']
                );
            }
        }

        foreach ($post as &$item) {
            $item['Files'] = array_unique($item['Files'], SORT_REGULAR);
            $item['Comments'] = array_unique($item['Comments'], SORT_REGULAR);
            $item['Labels'] = array_unique($item['Labels'], SORT_REGULAR);
        }

        $post = json_encode($post);
        
        header("Content-type: application/json;charset=utf-8");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $db = null;
        $dbQuery = null;

        echo $post;
    

    } catch (PDOException $e){
        echo $e;
    }
?>