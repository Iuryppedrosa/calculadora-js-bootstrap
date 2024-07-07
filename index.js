function limpar() {
  document.getElementById("resultado").value = "";
}
function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
      console.log("valor: ", valor);
    }
    if (valor === "=") {
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor; //é possivel isso pois o JS converte o valor para string
  }
}
