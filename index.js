// exercicio 01
a1 = 10 + 15;
a2 = "10" + 2;
a3 = "10" * 2;
a4 = "10" / 3;
a5 = "10" % 3;
a6 = 10 + true;
a7 = 10 == "10";
a8 = 10 === "10";
a9 = 10 < 11;
a10 = 10 > 12;
a11 = 10 <= 10.1;
a12 = 10 > 9.99;
a13 = 10 != "dez";
a14 = 10 + true;
a15 = "dez" + true;
a16 = 10 + false;
a17 = 10 * false;
a18 = true + true;
a19 = 10 + 1;
a20 = 10 - 1;
a21 = 1 & 1;
a22 = 1 & 0;
a23 = 0 & 0;
a24 = 1 & 0;
a25 = 0 / 1;
a26 = 5 + 5 == 10
a27 = "5" + "5" == 10
a28 = "5" * 2 > 9
a29 = (10 + 10) * 2
a30 = 10 + 10 * 2
 
let containera1 = document.getElementById("a1").innerHTML = "10 + 15 = " + a1;
let containera2 = document.getElementById("a2").innerHTML = "'10' + 2 = " + a2;
let containera3 = document.getElementById("a3").innerHTML = "'10' * 2 = " + a3;
let containera4 = document.getElementById("a4").innerHTML = "'10' / 3 = " + a4;
let containera5 = document.getElementById("a5").innerHTML = "'10' % 3 = " + a5;
let containera6 = document.getElementById("a6").innerHTML = "10 + true = " + a6;
let containera7 = document.getElementById("a7").innerHTML = "10 == '10' = " + a7;
let containera8 = document.getElementById("a8").innerHTML = "10 === '10' = " + a8;
let containera9 = document.getElementById("a9").innerHTML = "10 < 11 = " + a9;
let containera10 = document.getElementById("a10").innerHTML = "10 > 12 = " + a10;
let containera11 = document.getElementById("a11").innerHTML = "10 <= 10.1 = " + a11;
let containera12 = document.getElementById("a12").innerHTML = "10 > 9.99 = " + a12;
let containera13 = document.getElementById("a13").innerHTML = "10 != 'dez' = " + a13;
let containera14 = document.getElementById("a14").innerHTML = "10 + true = " + a14;
let containera15 = document.getElementById("a15").innerHTML = "'dez' + true = " + a15;
let containera16 = document.getElementById("a16").innerHTML = "10 + false = " + a16;
let containera17 = document.getElementById("a17").innerHTML = "10 * false = " + a17;
let containera18 = document.getElementById("a18").innerHTML = "true + true = " + a18;
let containera19 = document.getElementById("a19").innerHTML = "10++ = " + a19;
let containera20 = document.getElementById("a20").innerHTML = "10-- = " + a20;
let containera21 = document.getElementById("a21").innerHTML = "1 & 1 = " + a21;
let containera22 = document.getElementById("a22").innerHTML = "1 & 0 = " + a22;
let containera23 = document.getElementById("a23").innerHTML = "0 & 0 = " + a23;
let containera24 = document.getElementById("a24").innerHTML = "1 & 0 = " + a24;
let containera25 = document.getElementById("a25").innerHTML = "0 / 1 = " + a25;
let containera26 = document.getElementById("a26").innerHTML = "5 + 5 == 10 = " + a26;
let containera27 = document.getElementById("a27").innerHTML = "'5' + '5' == 10 = " + a27;
let containera28 = document.getElementById("a28").innerHTML = "'5' * 2 > 9 = " + a28;
let containera29 = document.getElementById("a29").innerHTML = "(10 + 10) * 2 = " + a29;
let containera30 = document.getElementById("a30").innerHTML = "10 + 10 * 2 = " + a30;

// exercicio 02
const branco = "preto";
console.log(branco);
const preto = "cinza";
console.log(preto);
const cinza = "branco";
console.log(preto);
const carro = "preto";
console.log(carro);
const valor = 30000;
console.log(valor);
const prestacao = 750;
console.log(prestacao);
const cavalo = carro;
let entrada = 3000;


let containerb1 = document.getElementById("branco").innerHTML = "Branco = " + branco;
let containerb2 = document.getElementById("preto").innerHTML = "Preto = " + preto;
let containerb3 = document.getElementById("cinza").innerHTML = "Cinza = " + cinza;
let containerb4 = document.getElementById("carro").innerHTML = "Carro = " + carro;
let containerb5 = document.getElementById("valor").innerHTML = "Valor = R$ " + valor;
let containerb6 = document.getElementById("prestacao").innerHTML = "Prestação = R$ " + prestacao;
let containerc1 = document.getElementById("a").innerHTML = "a) branco == branco = " + (branco == "branco");
let containerc2 = document.getElementById("b").innerHTML = "b) branco == cinza = " + (branco == cinza);
let containerc3 = document.getElementById("c").innerHTML = "c) carro === branco = " + (carro === branco);
let containerc4 = document.getElementById("d").innerHTML = "d) var cavalo = carro == 'preto' ? 'cinza' : 'marron' = " + (cavalo == "preto" ? "cinza" : "marron");
let containerc5 = document.getElementById("e").innerHTML = "e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demostre a operação: 30.000 - 3.000 / 750 = " + ((valor - 3000) / prestacao) + " parcelas";
let containerc6 = document.getElementById("f").innerHTML = "f) Somando as variáveis de cores é formada uma string de quantos caracteres? Resposta: " + (branco.length + preto.length + cinza.length) + " caracteres";

