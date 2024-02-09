<?php
    include './variables.php';

    $loginEmail = trim($_POST['email']);
    $loginPassword = trim($_POST['password']);

    try {
        // Conexion a la base de datos
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

        // Busca el usuario que coincida con el email
        $dbQuery = $db->query("SELECT * FROM `User` WHERE `Email` = '$loginEmail'");
        $userData = $dbQuery->fetchAll(); // Todos los users

        checkUserData($userData[0], $loginEmail, $loginPassword);

    } catch (PDOException $e){
        echo $e;
    }

    // Comprueba que hay usuario y que coincide la contraseña
    function checkUserData($user, $loginEm, $loginPass){
        if($loginEm === $user['Email']){
            if(password_verify($loginPass, $user['Password'])){
                echo "La contraseña coincide, iniciando sesión...";
                startSession($user); // Guarda el id de usuario en la sesión
                header('Location: http://localhost:3000/'); // Cambia la url 
            } else {
                echo "Contraseña incorrecta";
            }
        } else {
            echo "<br> $loginEm";
            echo "No existe un usuario con ese correo";
            echo "<br> $user";
        }
    }

    // Guarda en la variable de sesión el id del usuario
    function startSession($user){
        session_start();
        if(!isset($_SESSION['userId'])){
            $_SESSION['userId'] = $user['UserId'];
        }
    }
?>