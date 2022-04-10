var nota = 3;

if (nota >= 7) {
    document.write("Aprovado: " + nota + "<br>");
} else if ((nota < 7) && (nota >= 4)) {
    document.write("Recuperação: " + nota + "<br>");
} else {
    document.write("Reprovado: " + nota + "<br>");
}

// Nota maior ou igual a 7 - Aprovado
// Nota menor que 7 e a nota maior que 4 - Recuperação
// Nota menor que 4 - Reprovado

var sol = true;
var nublado = false;

if (sol) {
    document.write("Vamos para a praia porque está sol! <br>");
} else if (nublado) {
    document.write("Vamos para o parque! <br>");
} else {
    document.write("Vamos ficar em casa estudando JavaScript! <br>");
}