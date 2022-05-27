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

    $('#botonguardar').click(function() {
        swal({
            title: "Compra realizada",
            text: "Se compraron sus boletos de avion!",
            icon: "success",

        });
    });
// $('#btnconsulta').click(function(){
//     let varId= prompt("Consulta el nombre de la persona que compro el boleto");
//     $('modal1').modal();
//     $('modal1').on('hidden.bs.modal',function(e){
//         $.post('./php/ScriptConsulta.php',{par1:varId},function(data){
//             refrescar(data);
//             },'json');
//     }
//     )
//     });
});
    $("#btnconsulta").click(function () {
        $('input').val('');
        var vidu = prompt("Para consultar, coloque el nombre completo:");


        $.post('./php/ScriptConsulta.php',
                {idnombre: vidu},
                function (ret) {
                if (ret['resultado'] != 0) {
                console.log("Error");
                $('#modalMensaje .modal-header').addClass('modal-header-danger');
                $('#modalMensaje .modal-header h2').text(ret['mensaje']);
                $('#modalMensaje .modal-body h3').text(ret['detalle']);
                $('#modalMensaje').modal();

                $("#modalMensaje").on('shown.bs.modal', function () {
                    $('#botonCerrar').focus();
                });
                $("#modalMensaje").on('hidden.bs.modal', function () {
                    $('#modalMensaje .modal-header').removeClass('modal-header-danger');
                });
                }
                else {
                console.log(ret);
                console.log(ret.detalle);
                console.log(ret.detalle.idnombre);
        
                $('#idnombre').val(ret.detalle.idnombre);
                $('#numerotel').val(ret.detalle.numerotel);
                $('#fechaida').val(ret.detalle.fechaida);
                $('#correo').val(ret.detalle.correo);
                $('#fechare').val(ret.detalle.fechare);
                $('#nencargado').val(ret.detalle.nencargado);
                $('#modalMensaje .modal-header').addClass('modal-header-success');
                $('#modalMensaje .modal-header h2').text(ret['mensaje']);
                $('#modalMensaje .modal-body h3').text("Nombre: "+ret.detalle.idnombre);
                $('#modalMensaje').modal();

                $("#modalMensaje").on('shown.bs.modal', function () {
                    $('#botonCerrar').focus();
                });
                $("#modalMensaje").on('hidden.bs.modal', function () {
                    $('#myModal .modal-header').removeClass('modal-header-success');
                });
            }
        },'json');
    });