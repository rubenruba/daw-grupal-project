<?php
    include 'variables.php';

    // Conexión a la base de datos con manejo de errores
    try {
        $db = new PDO("mysql:host=$serverName;dbname=$database", $user, $password);
        $dbQuery = $db->query('SELECT * FROM User');
        $rows = $dbQuery->fetchAll();

        foreach ($rows as $row) {
            print $row[0];
            print $row[1];
        }

        $db = null;
        $dbQuery = null;

    } catch (PDOException $e) {
        echo "Error en la conexión: ".$e->getMessage();
        die();
    }
?>