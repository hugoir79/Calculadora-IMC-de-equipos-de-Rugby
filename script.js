function calcularIMC() {
    // 1. Obtener los valores usando parseFloat (Requisito CRÍTICO de la hoja)
    // Se usa parseFloat porque el HTML entrega los números como texto [cite: 52]
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
 
   // 2. Obtener el equipo del select (ID: seleccion-equipo)
    // Usamos querySelector para asegurarnos de que coja el <select> aunque haya un div con el mismo nombre
    let lista = document.querySelector('select#seleccion-equipo');
    
    let equipo = "Sin equipo";
    if (lista && lista.options) {
        // Cogemos el texto de la opción que tú hayas pinchado en el desplegable [cite: 40, 62]
        equipo = lista.options[lista.selectedIndex].text;
    }
 
    // --- ESTO ES LO QUE HACE QUE SALGA EN GRANDE EN LA WEB ---
    // Buscamos el h2 con el id equipo-grande y le metemos el nombre del equipo [cite: 37, 50]
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
 
    // 3. Mostrar el equipo en el H2 (ID: equipo-grande) 
    let tituloEquipo = document.getElementById('equipo-grande');
    if (tituloEquipo) {
        tituloEquipo.textContent = equipo;
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

/* MENÚ HAMBURGUESA — añadido */
var btnMenu         = document.getElementById('btnMenu');
var menuDesplegable = document.getElementById('menuDesplegable');
 
btnMenu.addEventListener('click', function () {
  menuDesplegable.classList.toggle('oculto');
});
 
var enlaces = menuDesplegable.querySelectorAll('a');
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    menuDesplegable.classList.add('oculto');
  });
});

// Al hacer clic en una foto pequeña, la pone en grande
function ponerGrande(imagen) {
  document.getElementById('foto-grande').src = imagen.src;
}