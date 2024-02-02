<?php
    include '../variables.php';

    $postId = $_GET['postId'];

    session_start();
    // $userId = $_SESSION['userId'];
    $userId = 1;

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
        echo $postId;
        echo "<br><br>";
        echo $_POST['postId'];
        echo "<br><br>";
        echo "ERROR: ".$e;
        die();
    }
?>