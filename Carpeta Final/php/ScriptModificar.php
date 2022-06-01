<?php

$vIdnombre = $_POST['nom'];
$vNumerotel = $_POST['num'];
$vFechaida = $_POST['feid'];
$vCorreo  = $_POST['cor'];
$vFechare  = $_POST['fere'];
$vNencargado  = $_POST['nen'];

$hostname = 'localhost';
$database = 'L18100191';
$username = 'root';
$password = '';

try{    
    $con= new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch (PDOException $e){
    echo "Error de conexion de base de datos";
    echo $e -> getMessage();
    exit();
}


try {
    $consultaSql = "UPDATE Campos SET numerotel='$vNumerotel', fechaida='$vFechaida', correo='$vCorreo', fechare='$vFechare', nencargado='$vNencargado' WHERE idnombre = '$vIdnombre'";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta->closeCursor();
} catch(PDOException $e){
    echo "Error";
    echo $e->getMessage();
}
?>