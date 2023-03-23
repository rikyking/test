<?php
     require_once '../login/datiDB.php';
     header('Content-Type: application/json'); 

     $con=mysqli_connect($dbconfig['host'],$dbconfig['user'],$dbconfig['password'],$dbconfig['name']) or die("errore:" .mysqli_connect_error());

     $query="SELECT * FROM FOOD;
?>