const botoesFilters = document.querySelectorAll('.btn')

botoesFilters.forEach(btn => btn.addEventListener('click', filterBooks))


function filterBooks() {
    const elementoBtn = document.getElementById(this.id)
    const categoryValue = elementoBtn.value
    let booksFilters = categoryValue === 'disponivel' ? filtersAvailableBooks() : filtersAvailableBooksCategory(categoryValue)
    showBooks(booksFilters)
    if (categoryValue === 'disponivel') {
        const valueTot = calcValueAvailableBooks(filterBooks)
        showTotAvailableBooks(valueTot)
    }
}

function filtersAvailableBooks () {
    return books.filter(book => book.quantidade > 0)
}

function filtersAvailableBooksCategory (category){
    return books.filter(book => book.categoria ===  category)
}

function showTotAvailableBooks(value) {
    elementValueAvailableBooks.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${formatNumberMoney(value)}</span></p>
        </div>
    `
}
