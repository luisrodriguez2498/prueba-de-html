function generarParrafo(input1Id, input2Id, parrafoId) {
  const output1 = document.getElementById(input1Id).value;
  const output2 = document.getElementById(input2Id).value;
  const parrafo = document.getElementById(parrafoId);
  let parrafoCompleto = parrafo.textContent;
  parrafoCompleto = parrafoCompleto.replace("<>", output1);
  parrafoCompleto = parrafoCompleto.replace("<>", output2);
  parrafo.textContent = parrafoCompleto;
}

function copiarAlPortapapeles(parrafoId) {
  const parrafo = document.getElementById(parrafoId);
  const texto = parrafo.textContent;
  const textarea = document.createElement("textarea");
  textarea.value = texto;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("¡El texto ha sido copiado al portapapeles!");
}
