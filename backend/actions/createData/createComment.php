<?php
    include '../../variables.php';

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

        header("Location: http://ec2-52-200-109-82.compute-1.amazonaws.com/post?postId=$postId")

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>