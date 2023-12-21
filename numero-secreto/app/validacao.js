function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div> 
            valor invalido: Fale número entre ${menorValor} e ${maiorValor} 
       </div>`
        return
    }

    if(numero === numeroScreto) {
        document.body.innerHTML = ` <h2>VOCÊ ACERTOU!</h2>
         <h3>O número secreto era ${numeroScreto}</h3>
           <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>         
        `

    } else if(numero >numeroScreto) {
        elementoChute.innerHTML += `<div>
                <span>O número secreto é menor</span> <i class="fa-solid fa-arrow-down"></i>
            </div>`
    } else {
        elementoChute.innerHTML += `<div>
                <span>O número secreto é maior</span> <i class="fa-solid fa-arrow-up"></i>
            </div> `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero  < menorValor
}

document.body.addEventListener('click', e => {

    if (e.target.id === 'jogar-novamente') {
        window.location.reload()
    }

})