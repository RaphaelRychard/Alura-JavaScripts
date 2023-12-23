let books = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBooksAPI()

async function getBooksAPI() {
    const resp = await fetch(endpointAPI)
    books = await resp.json()
    console.table(books)
    let booksDiscount = applyDiscount(books)
    showBooks(booksDiscount)
}