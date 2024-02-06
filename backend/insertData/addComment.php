<?php
    include '../variables.php';

    $commentText = $_POST['comment'];
    $postId = $_POST['postId'];

    session_start();
    $userId = $_SESSION['userId'];

    $date = date("Y-m-d H:i:s"); 

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "INSERT INTO `Comment`(`UserId`, `PostId`, `Text`, `Date`)
            VALUES('$userId', '$postId', '$commentText', '$date');"; 

        $db->query($dbQuery);

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>