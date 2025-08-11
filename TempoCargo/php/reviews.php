<?php
$apiKey = "AIzaSyCdDyxX4m3r-ruJuLBet75EZK4Y0Y-vaK4";
$placeId = "places/ChIJjQsVTA6prI8RvPbJO147ATk";

$url = "https://places.googleapis.com/v1/{$placeId}?fields=reviews,rating,userRatingCount&key=$apiKey";

// Hacer la solicitud
$response = file_get_contents($url);
if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "Error al obtener datos"]);
    exit;
}

// Devolver el JSON limpio
header("Content-Type: application/json");
echo $response;