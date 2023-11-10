//refactorizar
function getLocation() {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
        // Obtener la ubicación
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        // Mostrar un mensaje de error si no es compatible
        document.getElementById("demo").innerHTML = "La geolocalización no es compatible con este navegador.";
    }
}
// Función que se ejecuta cuando se obtiene la ubicación
function showPosition(position) {
    // Mostrar la información de la ubicación en el elemento con id "demo"
    document.getElementById("demo").innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("demo").innerHTML = "El usuario denegó la solicitud de geolocalización."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("demo").innerHTML = "La información de ubicación no está disponible."
            break;
        case error.TIMEOUT:
            document.getElementById("demo").innerHTML = "La solicitud de geolocalización ha caducado."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("demo").innerHTML = "Se produjo un error desconocido."
            break;
    }
}