<?php

$registro['nombre'] ='Luis Francisco Hernandez Yepez';
$registro['numerotel'] ='123456789';
$registro['fechaida'] ='12/25/99';
$registro['correo'] ='yepezluis279@gmail.com';
$registro['fechare'] ='02/15/00';
$registro['nencargado'] ='Julian';

$registroJson = json_encode($registro);

echo $registroJson;

?>