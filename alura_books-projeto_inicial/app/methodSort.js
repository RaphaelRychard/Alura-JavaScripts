let btSortElement = document.querySelector('#btnOrdenarPorPreco')

btSortElement.addEventListener('click', sortBooksPrice)

function sortBooksPrice() {
    let booksSort = books.sort((a, b) => a.preco - b.preco)
    showBooks(booksSort)
}