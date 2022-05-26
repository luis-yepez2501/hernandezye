<?php

$paridCte=$_POST['par1'];

$hostname='localhost';
$database='L18100191';
$username='root';
$password='';

try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch(PDOException $e){
    echo "Error de conexión a la base de datos";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try{
    $consultaSql = "select idnombre,numerotel,fechaida,correo,fechare,nencargado".$paridCte;
    $consulta = $con ->prepare($consultaSql);
    $consulta->execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
}catch(PDOException $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
echo json_decode($resultado);
?>