<?php
    include '../../variables.php';

    $postId = $_GET['postId'];
    $userId = $_GET['userId'];

    // session_start();
    // $userId = $_SESSION['userId'];

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        
        $dbQuery = "INSERT INTO `Favorite`(`UserId`, `PostId`)
        VALUES('$userId', '$postId');"; 

        $db->query($dbQuery);

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>