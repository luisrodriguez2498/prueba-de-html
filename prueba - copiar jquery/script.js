$(document).ready(function () {
  $("#generar").click(function () {
    var reserva = $("#reserva").val();
    var fecha = $("#fecha").val();
    var frase =
      "Is this for your reservation to " +
      reserva +
      " on " +
      fecha +
      ", correct?";
    $("#frase-generada").text(frase);
  });

  $("#copiar").click(function () {
    var copyText = document.getElementById("frase-generada");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    alert("La frase ha sido copiada al portapapeles.");
  });
});
