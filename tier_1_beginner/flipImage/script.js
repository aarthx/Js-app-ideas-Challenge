function left(id) {
    const bonk = document.getElementById(id)
    if(bonk.style.transform == 'rotateY(0deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(0deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(180deg)'
    }
}

function right(id) {
    const bonk = document.getElementById(id)
    if(bonk.style.transform == 'rotateY(0deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(0deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(180deg)'
    }
}

function up(id) {
    const bonk = document.getElementById(id)
    if(bonk.style.transform == 'rotateY(0deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(0deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(0deg)'
    }
}

function down(id) {
    const bonk = document.getElementById(id)
    if(bonk.style.transform == 'rotateY(0deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(0deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(0deg) rotateX(0deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(0deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(180deg)'
    } else if(bonk.style.transform == 'rotateY(180deg) rotateX(180deg)') {
        bonk.style.transform = 'rotateY(180deg) rotateX(0deg)'
    }
}

function mudaImagem() {
    let input = document.querySelector("#url")
    let url = input.value

    if (url.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        
        return alert("Imagem Inválida")
    }

    let imagens = document.querySelectorAll('.bonk')

    for(let i = 0; i < imagens.length; i++) {
        imagens[i].setAttribute('src', `${url}`)
    }
}

