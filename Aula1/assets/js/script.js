alert("Conversor de Celsius, Fahrenheit e Kelvin")
var nomeUsuario = prompt("digite seu nome");
var escolha = prompt("Dejesa converter Celsius 1, 2 caso queira converter Fahrenheit e 3 para Kelvin")

 if (escolha === "1") {
  var escolha2 = prompt("Dejesa converter de Celsius para Fahrenheit digite 1, ou 2 caso queira converter de Celsius para Kevin");
  if(escolha2 === "1"){
    var temperaturaEmCelsius = prompt("Temperatura em Celsius");
    var temperaturaEmFahrenheit = ((temperaturaEmCelsius * 1.8) + 32).toFixed(2);
    alert(`Olá  ${nomeUsuario} ! A temperatura em fahrenheit ${temperaturaEmFahrenheit}`);
  }  
  if (escolha2 === "2"){
    var temperaturaEmCelsius = prompt("Temperatura em Celsius");
    var temperaturaEmKelvin = (parseInt(temperaturaEmCelsius ) + 273.15).toFixed(2);
    alert(`Olá  ${nomeUsuario} ! A temperatura em fahrenheit ${temperaturaEmKelvin}`);
  }
 }
 if (escolha === "2") {
  var escolha2 = prompt("Dejesa converter de Fahrenheit para Celsius digite 1, ou 2 caso queira converter de Fahrenheint para Kevin");
  if(escolha2 === "1"){
    var temperaturaEmFahrenheit = prompt("Temperatura em Fahrenheit");
    temperaturaEmCelsius = ((temperaturaEmFahrenheit - 32) * 1.8).toFixed(2); 
    alert(`Olá  ${nomeUsuario} ! A temperatura em Celsiust ${temperaturaEmCelsius}`);  
  }  
  if (escolha === "2"){
    var temperaturaEmFahrenheit = prompt("Temperatura em Fahrenheit");
    temperaturaEmKelvin = ((temperaturaEmFahrenheit - 32) * 1.8 + 273.15).toFixed(2);  
    alert(`Olá  ${nomeUsuario} ! A temperatura em fahrenheit ${temperaturaEmKelvin}`);  
  }
 }
 if (escolha === "3") {
  var escolha2 = prompt("Dejesa converter de Kenvin para Celsius digite 1, ou 2 caso queira converter de Kevin para Fahrenheit");
  if(escolha2 === "1"){
    var temperaturaEmKelvin = prompt("Temperatura em Kelvin");
    var temperaturaEmCelsius = (temperaturaEmKelvin - 273.15).toFixed(2);
    alert(`Olá  ${nomeUsuario} ! A temperatura em fahrenheit ${temperaturaEmCelsius}`);
  }  
  if (escolha === "2"){
    var temperaturaEmKelvin = prompt("Temperatura em Kelvin");
    temperatura = ((temperaturaEmFahrenheit - 273.15) * 1.8 + 32).toFixed(2);  
    alert(`Olá  ${nomeUsuario} ! A temperatura em fahrenheit ${temperaturaEmFahrenheit}`);  
  }
 }