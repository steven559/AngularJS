<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 28/03/2019
 * Time: 11:42
 */
$servername = "localhost";

$username = "root";

$password = "";

$dbname = "angular";
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die ("Connection failed: " . $conn->connect_error);
} else {

    $conn->select_db($dbname);
}