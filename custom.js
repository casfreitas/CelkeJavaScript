function nome_funcao() {
    alert("Login ou senha incorreta");
}

function somar(a, b) {
    var total = a + b;
    alert("Valor da soma " + total);
}

function desconto(a, b) {
    var totalDesc = a - b;
    return totalDesc;
}
var resultTotalDesc = desconto(7, 5);
document.write("Valor final com desconto: " + resultTotalDesc + "<br>");


// Usando Arrow Functions
const soma = (numero1, numero2) => numero1 + numero2;
document.write("Valor da soma: " + soma(300, 400) + "<br>");

// Se for preciso usar mais de uma linha, usar parenteses
const total = (numero1, numero2) => {
    return numero1 + numero2;
}
document.write("Valor datoal: " + total(300, 700) + "<br>");