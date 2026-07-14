function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
        document.body.style.background = "#F2D28B"
        mensagem.innerHTML = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        img.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        document.body.style.background = "#F08A5D"
        mensagem.innerHTML = "Boa tarde!"

    } else {
        img.src = "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=600&q=80"
        document.body.style.background = "#1D3557"
        mensagem.innerHTML = "Boa noite!!"
    }

}