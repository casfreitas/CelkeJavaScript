// Enviar os dados para o arquivo index.html utilizando o atributo ID
// document - Document representa qualquer pagina da web carregada no navegador
// getElementByid("nome-usuario") - Retorna o seletor que possui o atributo ID
// Apropriedade innerHTML define ou obtém a sintaxe HTML
document.getElementById("nome-usuario").innerHTML = "<p style='color: green'>Cesar</p>";

// Enviar os dados para o arquivo index.html utilizando o atributo Class
// document - Document representa qualquer pagina da web carregada no navegador
// getElementsByClassName("turma-usuario")[0] - Retorna o seletor que possui o atributo Class, primeira ocorrencia do seletor
// Apropriedade innerHTML define ou obtém a sintaxe HTML
document.getElementsByClassName("turma-usuario")[0].innerHTML = "<p style='color: #8a2be2'>Curso de PHP Developer</p>";

// Enviar os dados para o arquivo index.html utilizando o atributo Class
// document - Document representa qualquer pagina da web carregada no navegador
// getElementsByClassName("turma-usuario")[1] - Retorna o seletor que possui o atributo Class, primeira ocorrencia do seletor
// Apropriedade innerHTML define ou obtém a sintaxe HTML
document.getElementsByClassName("turma-usuario")[1].innerHTML = "<p style='color: #800000'>Turma 4</p>";


// Enviar os dados para o arquivo index.html utilizando o atributo indicado, neste exemplo "." o class: querySelect(".modulo")
// document - Document representa qualquer pagina da web carregada no navegador
// querySelector(".modulo") - Retorna o seletor que possui o atributo Class
// Apropriedade innerHTML define ou obtém a sintaxe HTML
document.querySelector(".modulo").innerHTML = "<p style='color: #8a2be2'>PHP</p>";

// Enviar os dados para o arquivo index.html utilizando o atributo indicado, neste exemplo "#" o ID: querySelect(".qnt-aula-visualisada")
// document - Document representa qualquer pagina da web carregada no navegador
// querySelector(".qnt-aula-visualisada") - Retorna o seletor que possui o atributo ID
// Apropriedade innerHTML define ou obtém a sintaxe HTML
document.querySelector("#qnt-aula-visualisada").innerHTML = "<p style='color: #dc143c'>7 aula</p>";

// Enviar os dados para o arquivo index.html utilizando o atributo indicado, neste exemplo "#" o ID: querySelect("#sit-inscricao")
// document - Document representa qualquer pagina da web carregada no navegador
// querySelector("#sit-inscricao") - Retorna o seletor que possui o atributo ID
// Apropriedade innerHTML define ou obtém a sintaxe HTML
var sitInscricao = document.querySelector("#sit-inscricao");
if (sitInscricao) {
    sitInscricao.innerHTML = "<p style='color: green;'>Pago</p>";
    //document.querySelector("#sit-inscricao").innerHTML = "<p style='color: #dc143c;'>Cancelado</p>";
}