<?php
require 'database.php'; // Asegúrate de tener la conexión a la base de datos configurada aquí

// Crear hotel
function createHotel($nombre, $descripcion, $precio, $restaurantes, $horario) {
    global $mysqli;
    $stmt = $mysqli->prepare("INSERT INTO hoteles (nombre, descripcion, precio, restaurantes, horario) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssdss", $nombre, $descripcion, $precio, $restaurantes, $horario);
    $stmt->execute();
    $stmt->close();
}

// Leer todos los hoteles
function getHoteles() {
    global $mysqli;
    $result = $mysqli->query("SELECT id, nombre, descripcion, precio, restaurantes, horario FROM hoteles");
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Actualizar un hotel
function updateHotel($id, $nombre, $descripcion, $precio, $restaurantes, $horario) {
    global $mysqli;
    $stmt = $mysqli->prepare("UPDATE hoteles SET nombre = ?, descripcion = ?, precio = ?, restaurantes = ?, horario = ? WHERE id = ?");
    $stmt->bind_param("ssdssi", $nombre, $descripcion, $precio, $restaurantes, $horario, $id);
    $stmt->execute();
    $stmt->close();
}

// Eliminar un hotel
function deleteHotel($id) {
    global $mysqli;
    $stmt = $mysqli->prepare("DELETE FROM hoteles WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}
?>
