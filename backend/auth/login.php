<?php
    include '../variables.php';

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
                startSession($user); // Guarda el id de usuario en la sesión
                setcookie("userId", $user['UserId'], 0, '/'); // Alamcenamos en una cookie en el navegador el userId
                header('Location: http://ec2-34-207-224-244.compute-1.amazonaws.com/'); // Cambia la url 
            } else {
                echo "Contraseña incorrecta";
            }
        } else {
            echo "No existe un usuario con ese correo";
        }
    }

    // Guarda en la variable de sesión el id del usuario
    function startSession($user){
        session_start();
        $_SESSION['userId'] = $user['UserId'];
    }
?>