<?php
include "ScriptConectar.php";

try {
    $query=$con->prepare("select *from Campos");
    $query->execute();

    while($row = $query->fetch()){
        echo $row['idnombre'].'/'.
        $row['numerotel'].'/'.
        $row['fechaida'].'/'.
        $row['correo'].'/'.
        $row['fechare'].'/'.
        $row['nencargado'].'<br>';
    }
    $query->closeCursor();


}catch(PDOException $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>