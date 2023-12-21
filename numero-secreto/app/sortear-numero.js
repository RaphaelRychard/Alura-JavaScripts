const menorValor = 10
const maiorValor = 1000
const numeroScreto = gerarNumeroAleaotrio()


function gerarNumeroAleaotrio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroScreto)


const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor