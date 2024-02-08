<?php
    function insertLabel($userId){
        include '../variables.php';

        $label1 = $_POST['label1'];
        $label2 = $_POST['label2'];
        $label3 = $_POST['label3'];
    
        try {
            $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);
    
            $dbQuery = "SELECT MAX(`PostId`) FROM `Post` WHERE `userId` = '$userId'"; 
            $postId = $db->query($dbQuery)->fetch();
            $postId = $postId[0];
    
            $dbQuery = "INSERT INTO `LabelPost`(`LabelId`, `PostId`)
                VALUES('$label1', '$postId');"; 
    
            $db->query($dbQuery);
    
            $dbQuery = "INSERT INTO `LabelPost`(`LabelId`, `PostId`)
            VALUES('$label2', '$postId');"; 
    
            $db->query($dbQuery);
    
            $dbQuery = "INSERT INTO `LabelPost`(`LabelId`, `PostId`)
            VALUES('$label3', '$postId');"; 
    
            $db->query($dbQuery);
            
            $db = null;
            $dbQuery = null;
    
            insertFiles($userId);
    
        } catch (PDOException $e) {
            echo "ERROR: ".$e;
            die();
        }
    }
?>