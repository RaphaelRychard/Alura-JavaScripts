import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideo.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    const datadoPesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conectaAPI.buscaVideo(datadoPesquisa)

    const lista = document.querySelector('[data-lista]')

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    )
    
    if (busca.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe lista com esse termo</h2>`
    }
}

const botaoPesquisa = document.querySelector('[data-butao-pesquisa]')


botaoPesquisa.addEventListener('click', evento => buscarVideo(evento))

01-NEXTJS-CURSO
01