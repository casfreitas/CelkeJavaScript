/****************** FOR basico *******************/
var total = 0;
var resultadoA = "";

for (let i = 1; i <= 5; i++) {
    //document.write("Valor da variável i: " + i + "<br>");
    resultadoA += "Valor da variável i: " + i + "<br>";
}
//console.log(resultadoA);
// Enviar os dados para o arquivo index.html
document.getElementById("listar").innerHTML = resultadoA;


/************** Ler o array com FOR *****************/
// Listar os produtos que estao no array
var carrinho = new Array();
carrinho[0] = ["Curso de PHP Developer", 329, 1];
carrinho[1] = ["Curso de Node.js, React e React Native", 439, 1];
console.log(carrinho);
var resultadoB = "";
for (let i = 0; i < carrinho.length; i++) {
    resultadoB += "Nome do produto: " + carrinho[i][0] + " - Preço do produto: R$ " + carrinho[i][1] + " - Quantidade: " + carrinho[i][2] + "<br>";
}
//console.log(resultadoB);
// Enviar os dados para o arquivo index.html
document.getElementById("listar-produtos").innerHTML = resultadoB;


/************** Ler o objeto com FOR *****************/
// Listar as caracteristicas do imovel que esta no objeto
var imovel = { tipo: 'Tipo de Imóvel - Casa', dormitorios: 'Nº de dormitórios - 3', mobiliado: 'Mobiliado - não' };
for (let caracteristica in imovel) {
    // Enviar somente uma caracteristca do imovel para o arquivo index.html
    //document.getElementById('listar-caract-imovel').innerHTML = imovel[caracteristica] + "<br>";

    // Enviar os dados para o arquivo index.html, acrescentar no final da lista novo registro
    document.getElementById('listar-caract-imovel').insertAdjacentHTML('beforeend', imovel[caracteristica] + "<br>");
}