<?php
// include "ScriptConectar.php";

// try {
//     $query=$con->prepare("select *from Campos");
//     $query->execute();
//     while($row = $query->fetch()){
//         echo $row['idnombre'].'/'.
//         $row['numerotel'].'/'.
//         $row['fechaida'].'/'.
//         $row['correo'].'/'.
//         $row['fechare'].'/'.
//         $row['nencargado'].'<br>';
//     }
//     $query->closeCursor();
// }catch(PDOException $e){
//     echo "Error de consulta a la base de datos";
//     echo $e->getMessage();
// }

$idnombre = $_POST['idnombre'];

$hostname = 'localhost';
$database = 'L18100191';
$username = 'root';
$password = '';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
} catch(PDOException $e) {
    $row['resultado']  = '1';
    $row['informacion']= 'Error DB';
    $row['mensaje']    = 'Exeption';
    $row['detalle']    = $e->getMessage();
}

$sql = "SELECT * FROM Campos WHERE idnombre = ?";
$stmt = $dbh->prepare($sql);
$stmt->bindParam(1, $idnombre);

 if($stmt->execute()){
       $result = $stmt->fetch(PDO::FETCH_ASSOC);

       $row['resultado']  = '0';
       $row['informacion']= 'Consulta Exitosa';
       $row['mensaje']    = 'Registro Encontrado';
       $row['detalle']    = $result;
} else {
       $row['resultado']  = '2';
       $row['informacion']= 'Error Consulta';
       $row['mensaje']    = 'Error';
       $row['detalle']    = "Error al ejectar la consulta";
}
echo json_encode($row);
?>