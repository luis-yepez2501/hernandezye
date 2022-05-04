$(document).ready(function (){
    $('#botonAlerta').click(function() {
        $('#ventanaAlerta').show();
    });        


    $('#botonCerrarAlerta').click(function() {
        $('#ventanaAlerta').hide();
    });

    $('#botonJS').click(function() {
        $('.modal-body').text("Esta seguro de comprar los boletos?");
        $('#exampleModal').modal();
    });

    $('#botonSweet').click(function() {
        swal({
            title: "Compra realizada",
            text: "Se compraron sus boletos de avion!",
            icon: "success",

        });
    });

    $('#botonAjax').click(function(){
        var solicitud = new XMLHttpRequest();

            solicitud.onreadystatechange = function() {   

        if (solicitud.readyState == 4 && solicitud.status == 200) {
        document.getElementById("encabezado").innerHTML = solicitud.responseText;
        }};

       solicitud.open("GET", "texto.txt", true);
       solicitud.send();
    });
});
