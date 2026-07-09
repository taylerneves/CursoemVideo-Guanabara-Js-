function verificarMulta() {
    // 1. Captura o valor do input através do ID "velocidade"
    var txtvel = document.querySelector('input#velocidade');
    var res = document.querySelector('p#resultado');
    
    // 2. Converte o valor capturado para um número real (float)
    var vel = Number(txtvel.value);
    
    // 3. Lógica para verificar a velocidade
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;
    
    if (vel > 80) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`;
    } else {
        res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
    }
}