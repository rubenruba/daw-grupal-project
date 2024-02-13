<?php
    include '../../variables.php';

    $postId = $_GET['postId'];

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "DELETE FROM `Post` WHERE `PostId` = '$postId'";

        $db->query($dbQuery);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>