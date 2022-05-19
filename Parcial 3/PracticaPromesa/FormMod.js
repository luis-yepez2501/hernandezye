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

    new Promise(function(resolve,reject) {
        $('#botonAjax').click(function(){
        var solicitud = new XMLHttpRequest();

            solicitud.onreadystatechange = function() {   

        if (solicitud.readyState == 4 && solicitud.status == 200) {
        document.getElementById("encabezado").innerHTML = solicitud.responseText;
        }};

       solicitud.open("GET", "texto.txt", true);
       solicitud.send();
            }).then(value => document.getElementById("enca").innerHTML=value);        
                
               
        });
        
        $('#btnJson').click(function() {
            $.post('getRegistro.PHP',{},function(data){
    
                console.log(data);
                $('#num1').val(data.num1);
            $('#num2').val(data.num2);
            $('#num3').val(data.num3);
            $('#num4').val(data.num4);
            $('#num5').val(data.num5);
            $('#num6').val(data.num6);
    
            },'json')
        });
});
