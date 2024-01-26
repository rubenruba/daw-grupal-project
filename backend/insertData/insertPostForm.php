<?php
    include '../variables.php';

    $text = $_POST['postText'];
    $files = $_POST['files'];

    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        $dbQuery = "INSERT INTO `Post`(`UserId`, `Text`, `Date`)
            VALUES('$nameNav', '$text', 'CURRENT_TIMESTMAP()');"; 

        $db->query($dbQuery);

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "Error al registrarse ".$e;
        die();
    }

    // Guarda en la variable de sesión el id del usuario
    function startSession($user){
        session_start();
        if(!isset($_SESSION['userId'])){
            $_SESSION['userId'] = $user['UserId'];
        }
    }
?>