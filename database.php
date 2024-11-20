<?php
$mysqli = new mysqli("localhost", "usuario", "contraseña", "nombre_de_base_de_datos");

if ($mysqli->connect_error) {
    die("Conexión fallida: " . $mysqli->connect_error);
}
?>
