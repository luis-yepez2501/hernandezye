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
});
