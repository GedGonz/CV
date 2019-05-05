function calularEdad() {
    var Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var FechaString = "05/07/1991";

    var FechaNacimiento = new Date(FechaString);
    var FechaActual = new Date();
    var anios = (FechaActual.getFullYear() - FechaNacimiento.getFullYear());
    var mes = new Date().getMonth();
    var Es_o_Ya_Paso_CumpleaAnio = EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual);

    var edad = (Es_o_Ya_Paso_CumpleaAnio) ? anios : (--anios);


    if (EsCumpleAnios(FechaNacimiento, FechaActual)) {
        $('#greet').modal('show');
        $('#BodyHappy').append('Hoy ' + (mes + 1) + ' de ' + Meses[mes] + ' cumple ' + edad + ' de edad');
        $('#BodyHappy').append('<br><br>Felicidades!! 😇');

    }

    edad = (edad).toString();
    $("#edad").text(edad + " años");
}

function EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual) {

    var Es_o_Ya_Paso_CumpleaAnio = false;
    var YaPasoMesCumpleaños = ((FechaActual.getMonth() + 1) > (FechaNacimiento.getMonth() + 1));
    var EsMesCumpleaños = ((FechaActual.getMonth() + 1) == (FechaNacimiento.getMonth() + 1));
    var YaPasoDiaCumpelaños = (FechaActual.getDate() >= FechaNacimiento.getDate());

    if (YaPasoMesCumpleaños) {
        Es_o_Ya_Paso_CumpleaAnio = true;
    } else if (EsMesCumpleaños && YaPasoDiaCumpelaños) {
        Es_o_Ya_Paso_CumpleaAnio = true;
    }
    return Es_o_Ya_Paso_CumpleaAnio;
}

function EsCumpleAnios(FechaNacimiento, FechaActual) {

    var Es_CumpleaAnios = false;

    var EsMesCumpleaños = ((FechaActual.getMonth() + 1) == (FechaNacimiento.getMonth() + 1));
    var EsDiaCumpelaños = (FechaActual.getDate() === FechaNacimiento.getDate());

    if (EsMesCumpleaños && EsDiaCumpelaños) {
        Es_CumpleaAnios = true;
    }
    return Es_CumpleaAnios;
}