<?php
    include '../../variables.php';

    $postId = $_GET['postId'];
    $userId = $_GET['userId'];

    // session_start();
    // $userId = $_SESSION['userId'];

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "DELETE FROM `Favorite` WHERE `UserId` = '$userId' AND `PostId` = '$postId'";

        $db->query($dbQuery);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTION, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>