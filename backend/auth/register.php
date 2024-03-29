<?php
    include '../variables.php';

    $nameNav = $_POST['name'];
    $surnameNav = $_POST['surname'];
    $passwordNav = $_POST['password'];
    $gmailNav = $_POST['email'];
    $usernameNav = $_POST['username'];
    $pswdHash = password_hash($passwordNav, PASSWORD_BCRYPT);

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Insertar usuario en la base de datos (registro)
        $dbQuery = $db->query("INSERT INTO `User`(`Name`, `Surname`, `Email`, `Password`, `Username`, `Admin`)
            VALUES('$nameNav', '$usernameNav', '$gmailNav', '$pswdHash', '$usernameNav', '0');");

        // Obtener el usuario que se acaba de crear para poder guardar el userId en la session
        $dbQuery = $db->query("SELECT * FROM `User` WHERE `Email` = '$gmailNav'");
        startSession($dbQuery->fetchAll()[0]); // User

        // Cambia la url a landing
        header('Location: http://localhost:3000/');

        // Cierra la conexión y la query
        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "Error al añadir usuario: ".$e;
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