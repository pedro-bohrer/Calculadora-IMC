function skip() {
    document.write("<br><br>");           
}
function txt(texto) {
    document.write(texto);
    skip();
}
function calculo(peso, altura) {
    return imc = peso / (altura * altura);
}

var nome = prompt("informe o seu Nome: ");
var peso = prompt("informe o seu peso: ");
var alt = prompt("informe a sua Altura: ");

var imc = Math.round(calculo(peso, alt));

txt("<h3>O imc de " + nome + " é de " + imc);
if (imc < 18.5) {
   txt("Você está abaixo do recomendado") 
} else if (imc > 35) {
    txt("Você está acima do recomendado")  
} else if (imc >= 18.5 && imc <= 35) {
    txt("Seu imc está excelente!")  
}

