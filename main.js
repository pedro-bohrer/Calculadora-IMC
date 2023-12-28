function skip() {
    document.write("<br>");           
}
function txt(texto) {
    document.write(texto);
    skip();
}
function calculo(peso, altura) {
    return imc = peso / (altura * altura);
}

var nome1 = prompt("informe o primeiro Nome: ");
var peso1 = prompt("informe o primeiro peso: ");
var alt1 = prompt("informe a primeira Altura: ");

var nome2 = prompt("informe o segundo Nome: ");
var peso2 = prompt("informe o segundo peso: ");
var alt2 = prompt("informe a segundo Altura: ");

var imc1 = Math.round(calculo(peso1, alt1));
var imc2 = Math.round(calculo(peso2, alt2));
var imcSoma = imc1 + imc2;

txt("O imc de " + nome1 + " é: " + imc1);
txt("O imc de " + nome2 + " é: " + imc2);
skip();
txt("A soma dos dois imc's é igual a " + imcSoma + "<br>E sua média é igual a: " + (imcSoma/2));