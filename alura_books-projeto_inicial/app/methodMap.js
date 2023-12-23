function applyDiscount (books) {
    const discount = 0.3
    return books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    })
}