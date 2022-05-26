$(document).ready(function(){
    $('#botonAjax').click(function(){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    document.getElementById("idHeader").innerHTML = solicitud.responseText;
            }};
            solicitud.open("GET", "texto.txt", true);
            solicitud.send();
                       
            
           
    });
    $('#btnJson').click(function() {
        $.post('getRegistro.PHP',{},function(data){

            // console.log(data);
            // $('#num1').val(data.num1);
            // $('#num2').val(data.num2);
            // $('#num3').val(data.num3);
            // $('#num4').val(data.num4);
            // $('#num5').val(data.num5);
            // $('#num6').val(data.num6);

        },'json')
    });
    
    $('#botonguardar').click(function() {
        swal({
            title: "Compra realizada",
            text: "Se compraron sus boletos de avion!",
            icon: "success",

        });
    });

    $('#btnFetch').click(function() {
        fetch('getRegistro.PHP')
        .then(respuesta => respuesta.json())
        .then(function(dato) { refrescar(dato)});
    });
    function refrescar(objeto){
        $('#num1').val(objeto.num1);
        $('#num2').val(objeto.num2);
        $('#num3').val(objeto.num3);
        $('#num4').val(objeto.num4);
        $('#num5').val(objeto.num5);
        $('#num6').val(objeto.num6);
}
});