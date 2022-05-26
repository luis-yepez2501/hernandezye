<?php
include "ScriptConectar.php";

try {
    $query=$con->prepare("select *from Campos");
    $query->execute();

    while($row = $query->fetch()){
        echo $row['nombre'].'-'.
        $row['numerotel'].'-'.
        $row['fechaida'].'-'.
        $row['correo'].'-'.
        $row['fechare'].'-'.
        $row['nencargado'].'-';
    }
    $query->closeCursor();


}catch(PDOException $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>