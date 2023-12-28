const formulario = document.querySelector("[data-formulario]");

function criarVideo (evento) {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 20).toString();
}

formulario.addEventListener('subimit', evento => criarVideo(evento));