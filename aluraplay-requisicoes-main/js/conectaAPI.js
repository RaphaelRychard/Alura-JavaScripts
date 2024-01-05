const urlVideos = 'http://localhost:3000/videos'

async function listaVideos() {
    const conexao = await fetch(urlVideos);
    return await conexao.json();
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(urlVideos, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil Visualizações`,
            url: url,
            imagem: imagem,
        })
    });

    if(!conexao.ok) {
         throw new Error("Não Foi Possivel Enviar o video")
    }

    return await conexao.json();

}

async function buscaVideo(termoBusca) {
    const conecao = await fetch(`${urlVideos}?q=${termoBusca}`)
    return conecao.json()
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
};