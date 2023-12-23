const elementInsertBooks = document.querySelector('#livros')
const elementValueAvailableBooks = document.querySelector('#valor_total_livros_disponiveis')


function showBooks(listBooks) {
    elementValueAvailableBooks.innerHTML = ''
    elementInsertBooks.innerHTML = ' '

    listBooks.forEach(book => {
        let available = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementInsertBooks.innerHTML += `
             <div class="livro">
                <img class="${available}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                    ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$ ${formatNumberMoney(book.preco)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    })
}
