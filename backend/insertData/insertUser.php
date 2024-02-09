<?php
    include '../variables.php';

    $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);

    $dbQuery ="INSERT INTO `User`(`Name`, `Surname`, `Email`, `Password`, `Username`, `Admin`)
            VALUES('Test', 'From Visual', 'testfromVisual@gmail.com', 'visaulpass', 'visualuser', '0');";

    try {
        $db->query($dbQuery);

        echo "Usuario creado correctamente";

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "Error al añadir usuario: ".$e;
        die();
    }
?>