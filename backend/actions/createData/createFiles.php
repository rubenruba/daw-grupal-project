<?php
    function insertFiles($userId) {
        include '../../variables.php';

        try {
            $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);
    
            $dbQuery = "SELECT MAX(`PostId`) FROM `Post` WHERE `userId` = '$userId'"; 
            $postId = $db->query($dbQuery)->fetch();
            $postId = $postId[0];

            try {
                for($i = 0; $i < count($_FILES['files']['name']); $i++){

                    
                    $fileName = $_FILES['files']['name'][$i];
                    $fileType = $_FILES['files']['type'][$i];
                    $fileSize = $_FILES['files']['size'][$i];

                    $filePointer = fopen($_FILES['files']['tmp_name'][$i], 'r');
                    $fileData = fread($filePointer, filesize($_FILES['files']['tmp_name'][$i]));
                    $fileData = addslashes($fileData);
                    
                    $dbQuery = "INSERT INTO `File`(`FileBLOB`, `PostId`, `Type`, `Name`)
                        VALUES('$fileData', '$postId', '$fileType', '$fileName')";

                    $db->query($dbQuery);
                }
            } catch (Error $e){
                echo $e;
            }

            $db = null;
            $dbQuery = null;
    
        } catch (PDOException $e) {
            echo "ERROR: ".$e;
            die();
        }
    }
?>
