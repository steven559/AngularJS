<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 25/03/2019
 * Time: 14:25
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
function insert()

{

    GLOBAL $conn;
    $films = (isset($_POST['nouveauFilm']) ? $_POST['nouveauFilm'] : null);

    $films = filter_var($films, FILTER_SANITIZE_STRING);
    $livres = (isset($_POST['nouveauLivres']) ? $_POST['nouveauLivres'] : null);

    $livres = filter_var($livres, FILTER_SANITIZE_STRING);
    $jeuxVideos = (isset($_POST['nouveaujeux']) ? $_POST['nouveaujeux'] : null);

    $jeuxVideos = filter_var($jeuxVideos, FILTER_SANITIZE_STRING);
    $stmt = $conn->prepare("INSERT INTO `angular` (`films`, `livres`, `jeuxVideos`)VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $films, $livres, $jeuxVideos);

    $stmt->execute();

    $stmt->close();
    if ($films && $livres && $jeuxVideos == true) {

        echo "Arcticle ajouté avec succés";

    }

}


  $sql=  "SELECT * FROM `angular`";
  global $conn;
  $result = $conn->query($sql);
    json_encode($result);






insert();




