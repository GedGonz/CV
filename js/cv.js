
function calularEdad() {
    var anioNacimiento=1991;
    var anioActual=new Date().getFullYear();
    var edad=(anioActual-anioNacimiento).toString();
    $("#edad").text(edad+" años");
}