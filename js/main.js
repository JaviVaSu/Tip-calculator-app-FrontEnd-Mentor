$(document).ready(function() {
    let precio = 0;
    let personas = 0;
    let porcentaje = 0;
    let total_propina = 0;
    let propina_persona = 0;
    let total = 0;
    let total_persona = 0;

    $("#propina1").click(function(){
        $("#propina").val('5');
    });
    $("#propina2").click(function(){
        $("#propina").val('10');
    });
    $("#propina3").click(function(){
        $("#propina").val('15');
    });
    $("#propina4").click(function(){
        $("#propina").val('25');
    });
    $("#propina5").click(function(){
        $("#propina").val('50');
    });



    $("#btn-reset").click(function(){
        if($("#precio").val() == '' || $("#precio").val() == '0' || $("#propina").val() == '' || $("#personas").val() == '' || $("#personas").val() == '0'){
            $("#precio").val('');
            $("#error-precio").css("display", "block");
            $("#propina").val('');
            $("#error-propina").css("display", "block");
            $("#personas").val('');
            $("#error-personas").css("display", "block");
        }else{
            precio = $("#precio").val();
            porcentaje = $("#propina").val() / 100;
            personas = $("#personas").val();
            total_propina = precio * porcentaje;
            propina_persona = total_propina / personas;
            total = parseFloat(precio) + parseFloat(total_propina);
            total_persona = total / personas;

            $("#total-propina").text(propina_persona);
            $("#total-persona").text(total_persona);
        }
    });
});