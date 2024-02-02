<?php
    include '../variables.php';

    $postId = $_POST['postId'];

    session_start();
    $userId = $_SESSION['userId'];

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "INSERT INTO `Favorite`(`UserId`, `PostId`)
            VALUES('$userId', '$postId');"; 

        $db->query($dbQuery);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>