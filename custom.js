var a = 10;
var b = 12;
var c = 15;
var e = 10;

if (a == "10") {
    document.write("(==) O valor " + a + " é igual a 10! <br>");
} else {
    document.write("(==) O valor " + a + " não é igual a 10! <br>");
}

if (a === "10") {
    document.write("(===) O valor " + a + " é idêntico a 10! <br>");
} else {
    document.write("(===) O valor " + a + " não é idêntico a 10! <br>");
}

if (a != "10") {
    document.write("(!=) O valor " + a + " é diferente a 10! <br>");
} else {
    document.write("(!=) O valor " + a + " não é diferente a 10! <br>");
}

if (a !== "10") {
    document.write("(!==) O valor " + a + " não é idêntico a 10! <br>");
} else {
    document.write("(!==) O valor " + a + " é idêntico a 10! <br>");
}

if (c > b) {
    document.write("(>) O valor " + c + " é maior que " + b + "!<br>");
} else {
    document.write("(>) O valor " + c + " é menor que " + b + "!<br>");
}

if (a < b) {
    document.write("(<) O valor " + a + " é menor que " + b + "!<br>");
} else {
    document.write("(<) O valor " + a + " é maior que " + b + "!<br>");
}

if (a >= e) {
    document.write("(>=) O valor " + a + " é maior ou igual a" + e + "!<br>");
} else {
    document.write("(>=) O valor " + a + " não é maior também não é igual a " + e + "!<br>");
}

if (a <= e) {
    document.write("(<=) O valor " + a + " é menor ou igual a" + e + "!<br>");
} else {
    document.write("(<=) O valor " + a + " não é menor também não é igual a " + e + "!<br>");
}

if ((a == 11) && (b == 12)) {
    document.write("(&&) O valor " + a + " é igual a 11 e o valor " + b + " é igual a 12! <br>");
} else {
    document.write("(&&) As duas condições não são verdadeiras, o valor " + a + " não é igual a 11 ou o valor " + b + " não é igual a 12! <br>");
}

if ((a == 11) || (b == 12)) {
    document.write("(||) O valor " + a + " é igual a 11 ou o valor " + b + " é igual a 12! <br>");
} else {
    document.write("(||) Nenhuma das duas condições são verdadeiras, o valor " + a + " não é igual a 11 é o valor " + b + " não é igual a 12! <br>");
}