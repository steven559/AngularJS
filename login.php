<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 28/03/2019
 * Time: 11:05
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
?>


<?php




function select()
{

    if (isset($_POST['username']) && isset($_POST['password'])) {
        $identifiant =$_POST['username'];
        $_POST['username'];

        $pass=filter_var($_POST['password'],FILTER_SANITIZE_STRING);
        filter_var($_POST['password'],FILTER_FLAG_STRIP_HIGH);
        $pass=sha1($pass);
        global $conn;
        $sql = "SELECT * from `user`  where username='$identifiant' and password='$pass' ";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $id = $row['username'];
        $mdp = $row['password'];

        if (isset($id)) {

            session_start();


            $_SESSION['username'] = $_POST['username'];


        } else {

            echo '<body onLoad="alert(\'Membre non reconnu...\')">';

            echo '<meta http-equiv="refresh" content="0;URL=index.html">';
        }

    } else {
        echo 'Les variables du formulaire ne sont pas déclarées.';
    }
}