function calcularIMC() {
    // Obtener los valores 
    // El parseFloat se utiliza para convertir texto en decimal
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
 
    // Usamos querySelector para que coja el select del menu desplegable
    let lista = document.querySelector('select#seleccion-equipo');
    
    let equipo = "Sin equipo";
    if (lista && lista.options) {
        // con este comando cogemos el equipo que se haya seleccionado
        equipo = lista.options[lista.selectedIndex].text;
    }
 
    // el tituloGrande.texContext busca el equipo que selecciones para cuando hagas el calculo se ponga en grande el nombre en la web
    let tituloGrande = document.getElementById('equipo-grande');
    if (tituloGrande) {
        tituloGrande.textContent = equipo;
    }
 
    // Convertir altura a metros
    altura = altura / 100;
 
    // Calcular el IMC
    let IMC = peso / (altura * altura);
 
    // Guardar el mensaje para los varemos
    let estado = "";
 
    // Varemos de IMC
    if (IMC < 18.5) {
        estado = "Peso Bajo";
    } else if (IMC >= 18.5 && IMC < 25) {
        estado = "Peso normal";
    } else if (IMC >= 25 && IMC < 30) {
        estado = "Sobrepeso";
    } else {
        estado = "Obesidad";
    }
 
    
 
    // 4. Mostrar el resultado final con toFixed(2) y salto de línea \n 
    window.alert('EQUIPO: ' + equipo + '\n' +
                 'Tu IMC es: ' + IMC.toFixed(2) + '\n' + 
                 'Estado: ' + estado);
 
   // esto hace que el correo verifique si esta bien 
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return regex.test(email);
    }
}

// este es el menu funcional
var estiloboton         = document.getElementById('estiloboton');
var menuDesplegable = document.getElementById('menuDesplegable');
 
estiloboton.addEventListener('click', function () {
  menuDesplegable.classList.toggle('oculto');
});
 
var enlaces = menuDesplegable.querySelectorAll('a');
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    menuDesplegable.classList.add('oculto');
  });
});

// galeria de imagenes ( cuando tocas la imagen se hace mas grande)
function ponerGrande(imagen) {
  document.getElementById('foto-grande').src = imagen.src;
}