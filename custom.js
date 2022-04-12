var inicio = 1;

while (inicio <= 10) {
    document.write("Número do cliente: " + inicio + "<br>");
    inicio++;
}

var prestacao = 1;
var qnt_prestacoes = 12;

// DO WHILE Executa ao menos 1 vez
do {
    document.write("Número da prestações: " + prestacao + "<br>");
    prestacao++;
} while (prestacao <= qnt_prestacoes)

var num_prestacao = 1;
var num_qnt_prestacoes = 4;
var total = 120;
var valor_prestacao = total / num_qnt_prestacoes;

do {
    document.write("Número da prestação: " + num_prestacao + " valor " + valor_prestacao + "<br>");
    num_prestacao++;
} while (num_prestacao <= num_qnt_prestacoes)