function verificar() {
    var txtAno = document.getElementById("txtano");
    var res = document.getElementById("res");

    if (txtAno.value.length == 0) {
        alert("Por favor, informe o ano de nascimento.");
        return;
    }

    var nascimento = new Date(txtAno.value);
    var hoje = new Date();

    var idade = hoje.getFullYear() - nascimento.getFullYear();
    var mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    // Descobre o sexo selecionado
    var sexo = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (idade > 120) {
        document.body.style.background = "#000";
        document.querySelector("header").style.color = "#000000";
        document.querySelector("footer").style.color = "#000000";
        document.querySelector("section").style.backgroundColor = "#555"; // cinza
        res.innerHTML = `<strong>💀 Estou te procurando faz tempo...</strong><br>`;
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE1kCinwnIBffe3Rz-ScrnTgdY5NiMFkeQAxRjTM2Hw&s=10"; // ou um link da web
        res.appendChild(img);
        return; // Encerra a função aqui
    }

    if (document.getElementById("mas").checked) {
        sexo = "Masculino";

        if (idade < 12) {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntMeZSEFj_pg_nktCRPJnMzgWqU2XJsfq10Ff1Hewpw&s=10";
        } else if (idade < 60) {
            img.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
        } else {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pcJsoZ80hS-pU8sYWdsUwlGioWRSPi0E_EPk9eL24Q&s=10";
        }
    } else {
        sexo = "Feminino";

        if (idade < 12) {
            img.src = "https://static.vecteezy.com/ti/fotos-gratis/p2/35317676-casual-mulher-branco-criancas-menina-retrato-fofa-menina-mulher-pequeno-pessoa-femea-lindo-crianca-jovem-foto.jpg";
        } else if (idade < 60) {
            img.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
        } else {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yfhxFbauNoWpCzywznftvdw6Cr0-fksvy0ZeLOKVRQ&s=10";
        }
    }

    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.<br>`;
    res.appendChild(img);
}