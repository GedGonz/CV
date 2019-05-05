function calularEdad() {
    var FechaString = "05/05/1991";

    var FechaNacimiento = new Date(FechaString);
    var FechaActual = new Date();
    var anioedad = (FechaActual.getFullYear() - FechaNacimiento.getFullYear());




    var edad = (anioedad).toString();
    $("#edad").text(edad + " años");
}

function EsoYaPasoCumpleAnios(FechaNacimiento, FechaActual) {

    var Es_o_Ya_Paso_CumpleaAnio = false;
    var YaPasoMesCumpleaños = ((FechaActual.getMonth() + 1) >= (FechaNacimiento.getMonth() + 1));
    var YaPasoDiaCumpelaños = (FechaActual.getDate() >= FechaNacimiento.getDate());

    var EsMesCumpleaños = ((FechaActual.getMonth() + 1) == (FechaNacimiento.getMonth() + 1));

    if (EsMesCumpleaños && !YaPasoDiaCumpelaños) {

    } else if (!YaPasoMesCumpleaños) {

    } else {
        Es_o_Ya_Paso_CumpleaAnio = true;
    }
}