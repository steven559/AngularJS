<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 28/03/2019
 * Time: 11:14
 */




require "bdd.php";

function insert()
{

    var_dump($_POST);

    global $conn;
    $user = $_REQUEST['username'];
    $pass = sha1($_REQUEST['password']);


    $stmt = $conn->prepare("INSERT INTO `user` (`username`, `password`)VALUES (?, ?)");
    $stmt->bind_param("ss", $user, $pass);

    $stmt->execute();

    $stmt->close();


}

insert();


