<?php
require 'database.php'; // Asegúrate de tener la conexión a la base de datos configurada aquí

// Crear guía
function createGuia($nombre, $especialidad, $edad, $fechadenacimiento, $idiomas, $horario, $estrellas) {
    global $mysqli;
    $stmt = $mysqli->prepare("INSERT INTO guias (nombre, especialidad, edad, fechadenacimiento, idiomas, horario, estrellas) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisssi", $nombre, $especialidad, $edad, $fechadenacimiento, $idiomas, $horario, $estrellas);
    $stmt->execute();
    $stmt->close();
}

// Leer todos los guías
function getGuias() {
    global $mysqli;
    $result = $mysqli->query("SELECT id, nombre, especialidad, edad, fechadenacimiento, idiomas, horario, estrellas FROM guias");
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Actualizar un guía
function updateGuia($id, $nombre, $especialidad, $edad, $fechadenacimiento, $idiomas, $horario, $estrellas) {
    global $mysqli;
    $stmt = $mysqli->prepare("UPDATE guias SET nombre = ?, especialidad = ?, edad = ?, fechadenacimiento = ?, idiomas = ?, horario = ?, estrellas = ? WHERE id = ?");
    $stmt->bind_param("ssisssii", $nombre, $especialidad, $edad, $fechadenacimiento, $idiomas, $horario, $estrellas, $id);
    $stmt->execute();
    $stmt->close();
}

// Eliminar un guía
function deleteGuia($id) {
    global $mysqli;
    $stmt = $mysqli->prepare("DELETE FROM guias WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}
?>
