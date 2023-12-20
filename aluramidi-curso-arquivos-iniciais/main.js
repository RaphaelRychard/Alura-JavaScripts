function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    } else {
        alert('Elemento Não encontrado')
    }

}

const listaTeclas = document.querySelectorAll('.tecla')

for (let cont = 0; cont < listaTeclas.length; cont++) {

    const tecla = listaTeclas[cont]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = () => {
        tocaSom(idAudio)
    }

    tecla.onkeydown = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa')
        } else {
            tecla.classList.remove('ativa')
        }
    }

    tecla.onkeyup = (event) => {
        if (tecla && event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.remove('ativa')
        }
    }
}
