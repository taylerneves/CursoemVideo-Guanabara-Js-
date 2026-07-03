function calcular() {

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let operador = document.getElementById("operador").value;

    let resultado;

    switch (operador) {

        case "+":
            resultado = n1 + n2;
            break;

        case "-":
            resultado = n1 - n2;
            break;

        case "*":
            resultado = n1 * n2;
            break;

        case "/":
            resultado = n1 / n2;
            break;

        case "%":
            resultado = n1 % n2;
            break;

        case "**":
            resultado = n1 ** n2;
            break;

        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerHTML =
        `Resultado: ${resultado}`;
}