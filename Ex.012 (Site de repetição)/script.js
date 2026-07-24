function contar() {

    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");
    let res = document.getElementById("resultado");

    // Verifica se os campos estão vazios
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Preencha todos os campos!");
        res.innerHTML = "";
        return;
    }

    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    // Verifica se realmente são números
    if (isNaN(i) || isNaN(f) || isNaN(p)) {
        alert("Digite apenas números!");
        res.innerHTML = "";
        return;
    }

    // Verifica se o passo é válido
    if (p <= 0) {
        alert("Passo inválido! Considerando passo = 1.");
        p = 1;
    }

    res.innerHTML = "";

    // Contagem crescente
    if (i < f) {

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉 `;
        }

    }
    // Contagem regressiva
    else {

        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} 👈 `;
        }

    }

    res.innerHTML += "🏁";
}