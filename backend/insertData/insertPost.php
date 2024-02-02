<?php
    include '../variables.php';
    include './insertFiles.php';

    $text = $_POST['postText'];
    $title = $_POST['title'];

    session_start();
    $userId = $_SESSION['userId'];

    $date = date("Y-m-d H:i:s"); 

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "INSERT INTO `Post`(`UserId`, `Title`, `Text`, `Date`)
            VALUES('$userId', '$title', '$text', '$date');"; 

        $db->query($dbQuery);

        
        $db = null;
        $dbQuery = null;

        insertFiles($userId);

    } catch (PDOException $e) {
        echo "ERROR: ".$e;
        die();
    }
?>