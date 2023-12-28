async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    return await conexao.json()
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
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

    return await conexao.json();
}

export const conectaAPI = {
    listaVideos,
    criaVideo
}