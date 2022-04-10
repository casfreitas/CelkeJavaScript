// Criar Variável
document.write("<h2>Variável</h2>");

var nome_aluno = "Cesar";
var idade_aluno = 35;
var curso = "Curso de JavaScript";
document.write("Aluno(a): " + nome_aluno + ", tem a idade de " + idade_aluno + ". Esta inscrito no " + curso + "<br>");

nome_aluno = "Kelly";
idade_aluno = 34;
curso = "Curso de HTML";
document.write("Aluno(a): " + nome_aluno + ", tem a idade de " + idade_aluno + ". Esta inscrito no " + curso + "<br>");

document.write("<hr>");

// Criar Constante
document.write("<h2>Constante</h2>");

const nome_aluno_const = "Jessica";
const idade_aluno_const = "33";
const curso_const = "Curso de CSS";
document.write("Aluno(a): " + nome_aluno_const + ", tem a idade de " + idade_aluno_const + ". Esta inscrito no " + curso_const + "<br>");


// No caso de uma constante, o valor da variável não pode ser substituido.
// nome_aluno_const = "Gabrielly";
// idade_aluno_const = "32";
// curso_const = "Curso de JavaScript";
// document.write("Aluno(a): " + nome_aluno_const + ", tem a idade de " + idade_aluno_const + ". Esta inscrito no " + curso_const + "<br>");

// Criar Let
document.write("<h2>Let</h2>");

let nome_aluno_let = "Cesar";
let idade_aluno_let = "31";
let curso_let = "Curso de HTML";
document.write("Aluno(a): " + nome_aluno_let + ", tem a idade de " + idade_aluno_let + ". Esta inscrito no " + curso_let + "<br>");

nome_aluno_let = "Kelly";
idade_aluno_let = "30";
curso_let = "Curso de JavaScript";
document.write("Aluno(a): " + nome_aluno_let + ", tem a idade de " + idade_aluno_let + ". Esta inscrito no " + curso_let + "<br>");

document.write("<hr>");

if (true) {
    var situacao_um = 'Ativo';
    const situacao_dois = 'nativo';
    let situacao_tres = 'Análise';

    document.write("Situacao um: " + situacao_um + "<br>");
    document.write("Situacao dois: " + situacao_dois + "<br>");
    document.write("Situacao tres: " + situacao_tres + "<br><br>");
}

document.write("Situacao um: " + situacao_um + "<br>"); // Consegue recuperar fora do IF
// document.write("Situacao dois: " + situacao_dois + "<br>"); // NÃO consegue recuperar fora do IF
// document.write("Situacao tres: " + situacao_tres + "<br>"); // NÃO consegue recuperar fora do IF