function calcValueAvailableBooks(book) {
    return books.reduce((acc, book) => acc + book.preco, 0)
}