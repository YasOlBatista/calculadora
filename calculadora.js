let sinal = document.getElementById("sinal");
let caixaResul = document.getElementById("resultado");

function soma() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 + num2;
    sinal.innerHTML = "+";
    caixaResul.innerHTML = resultado;
}

function subtracao() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 - num2;
    sinal.innerHTML = "-";
    caixaResul.innerHTML = resultado;
}

function mult() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 * num2;
    sinal.innerHTML = "●";
    caixaResul.innerHTML = resultado;
}

function divisao() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 / num2;
    sinal.innerHTML = ":";
    caixaResul.innerHTML = resultado;
}
