function calularEdad() {
    var FechaString = "05/07/1991";

    var FechaNacimiento = new Date(FechaString);
    var FechaActual = new Date();
    var anios = (FechaActual.getFullYear() - FechaNacimiento.getFullYear());

    var Es_o_Ya_Paso_CumpleaAnio = EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual);

    var edad = (Es_o_Ya_Paso_CumpleaAnio) ? anios : (--anios);

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