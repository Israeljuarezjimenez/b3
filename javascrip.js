document.addEventListener('DOMContentLoaded', function() {
    var botonSi = document.getElementById('botonSi');
    botonSi.addEventListener('mouseover', function() {
        var contenedor = document.querySelector('.N');
        var contenedorAncho = contenedor.offsetWidth;
        var contenedorAlto = contenedor.offsetHeight;
        
        var botonAncho = botonSi.offsetWidth;
        var botonAlto = botonSi.offsetHeight;
        
        // Calcula los límites seguros dentro del contenedor
        var nuevaX = Math.random() * (contenedorAncho - botonAncho);
        var nuevaY = Math.random() * (contenedorAlto - botonAlto);
        
        // Aplica las nuevas coordenadas al botón
        botonSi.style.position = 'absolute';
        botonSi.style.left = nuevaX + 'px';
        botonSi.style.top = nuevaY + 'px';
    });
});
