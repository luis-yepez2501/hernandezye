$(document).ready(function(){

    btneliminar.disabled=true;
    btninsertar.disabled=true;
    btnmodificar.disabled=true;
    idnombre.disabled=true;
    numerotel.disabled=true;
    fechaida.disabled=true;
    correo.disabled=true;
    fechare.disabled=true;
    nencargado.disabled=true;

    $('#botonAjax').click(function(){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    document.getElementById("idHeader").innerHTML = solicitud.responseText;
            }};
            solicitud.open("GET", "texto.txt", true);
            solicitud.send();
    });

    // $('#botonguardar').click(function() {
    //     swal({
    //         title: "Compra realizada",
    //         text: "Se compraron sus boletos de avion!",
    //         icon: "success",

    //     });
    // });

    $('#btneliminar').click( function() {
        var vid = $('#idnombre').val();

        if (confirm('Eliminar')) {
            $.post('./php/ScriptEliminar.php',
            {idnombre: vid},
            function (ret) {
                alert("Borrado");
                btneliminar.disabled=true;
                btninsertar.disabled=true;
            },'json');
            $('input').val('');
        } else {
            alert("No se borra");
        }

        idnombre.disabled=true;
    numerotel.disabled=true;
    fechaida.disabled=true;
    correo.disabled=true;
    fechare.disabled=true;
    nencargado.disabled=true;
    btnmodificar.disabled=true;
    });

    $('#btninsertar').click(function() {
        var vnom = $('#idnombre').val();
        var vnum = $('#numerotel').val();
        var vfeid = $('#fechaida').val();
        var vcor = $('#correo').val();
        var vfere = $('#fechare').val();
        var vdnen = $('#nencargado').val();

        $.post('php/ScriptInsertar.php',
                {nom: vnom, num: vnum, feid: vfeid, cor: vcor, fere: vfere, nen: vdnen},
                function (ret) {

                if (ret['resultado'] != 0) {

                console.log('Error Insercion');
                alert('ERROR');
                }
                else {
                alert('Se ha insertado correctamentw');
            }
        },'json');
        swal("Se ha insertado correctamente.");
        btneliminar.disabled=false;
      });
      

      $('#btnnuevo').click(function() {
        btninsertar.disabled=false;
        btnmodificar.disabled=false;
        idnombre.disabled=false;
        numerotel.disabled=false;
        fechaida.disabled=false;
        correo.disabled=false;
        fechare.disabled=false;
        nencargado.disabled=false;
        idnombre.focus();
      });

      $('#reset').click(function() {
        btneliminar.disabled=true;
        btninsertar.disabled=true;
      });


      $('#btnmodificar').click(function() {
        var vnom = $('#idnombre').val();
        var vnum = $('#numerotel').val();
        var vfeid = $('#fechaida').val();
        var vcor = $('#correo').val();
        var vfere = $('#fechare').val();
        var vdnen = $('#nencargado').val();

        $.post('php/ScriptModificar.php',
                {nom: vnom, num: vnum, feid: vfeid, cor: vcor, fere: vfere, nen: vdnen},
                function (ret) {

                if (ret['resultado'] != 0) {

                console.log('Error');
                alert('ERROR');
                }
                else {
                alert('Se ha modificado correctamentw');
            }
        },'json');
        swal("Se ha modificado correctamente.");
        btneliminar.disabled=false;
        });
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
                btneliminar.disabled=false;
            }
        },'json');
    });