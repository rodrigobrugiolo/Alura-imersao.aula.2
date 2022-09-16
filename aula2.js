function Converter() {
  var valorElemento = document.getElementById("valor");
  
  var valor = valorElemento.value;
  var idade = parseFloat(valor);
  
  var idadeC = idade * 7;
  console.log(idadeC);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A sua idade, corresponde a:" + idadeC + " anos de um cachorro.";
  elementoValorConvertido.innerHTML = valorConvertido;
  
}
