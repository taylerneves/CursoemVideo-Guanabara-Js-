function verificar() {

    let idade = Number(document.getElementById("idade").value);
    let carteira = document.getElementById("carteira").value === "true";

    let maiorIdade = idade >= 18;

    let podeDirigir = maiorIdade && carteira;
    let precisaCarteira = maiorIdade && !carteira;
    let naoPodeDirigir = !maiorIdade || !carteira;

    document.getElementById("resultado").innerHTML = `
        Maior de idade: ${maiorIdade} <br>
        Possui carteira: ${carteira} <br><br>

        Maior de idade <strong>E</strong> possui carteira (&&): ${podeDirigir} <br>
        Maior de idade <strong>E</strong> NÃO possui carteira (&& + !): ${precisaCarteira} <br>
        NÃO é maior de idade <strong>OU</strong> NÃO possui carteira (! + ||): ${naoPodeDirigir}
    `;
}