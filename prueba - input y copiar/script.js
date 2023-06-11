$(document).ready(function () {
  // Cuando se envíe el formulario:
  $("#form").submit(function (event) {
    event.preventDefault(); // Evita que se recargue la página
    var words = $("#words").val(); // Obtiene las palabras ingresadas por el usuario
    var paragraph =
      "Este es un párrafo de ejemplo con las siguientes palabras: " + words; // Crea el nuevo párrafo
    $("#paragraph").text(paragraph); // Actualiza el párrafo en la página
    $("#copy-button").show(); // Muestra el botón de copiar
  });

  // Cuando se haga clic en el botón de copiar:
  $("#copy-button").click(function () {
    var paragraph = $("#paragraph").text(); // Obtiene el párrafo actual
    var textarea = $("<textarea>").val(paragraph); // Crea un elemento de textarea con el párrafo
    $("body").append(textarea); // Agrega el elemento de textarea al cuerpo de la página
    textarea.select(); // Selecciona el texto dentro del elemento de textarea
    document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
    textarea.remove(); // Elimina el elemento de textarea
  });
});
