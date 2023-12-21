const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInupt = document.querySelector('#alternar-musica')
const inicarOuPausarBt = document.querySelector('#start-pause span')
const ImageInicarPausar = document.querySelector('#start-pause img')
const ImageInicarPlay = document.querySelector('#start-pause img')
const tempoNaTela = document.querySelector('#timer')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
const musicaPlayBt = new Audio('/sons/play.wav')
const musicaPauseBt = new Audio('/sons/pause.mp3')
const musicaFinalizado = new Audio('/sons/beep.mp3')

let tempoDecorridoEmSegundos = 1500

let intervaloId = null

musica.loop = true


musicaFocoInupt.addEventListener('change', () => {
    if (musica.paused) {
        musica.play().then()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterContext('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterContext('descanso-curto')
    curtoBt.classList.add('active')
})

longBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterContext('descanso-longo')
    longBt.classList.add('active')
})

function alterContext(contexto) {

    mostrarTempo()

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            title.innerHTML = `
              Otimize sua produtividade,<br> 
              <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            title.innerHTML = `
                Que tal dar uma respirada? <br> 
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case 'descanso-longo':
            title.innerHTML = `
                Hora de voltar à superfície.<br> 
                <strong class="app__title-strong"> Faça uma pausa longa.</strong>
           `
            break;

        default:
            break
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        musicaFinalizado.play()
        musicaFinalizado.volume = 0.2
        alert('Tempo finalizado!')
        zerar()
        return
    }

    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarouPausar)

function iniciarouPausar() {
    if (intervaloId) {
        musicaPauseBt.play()
        zerar()
        return
    }
    musicaPlayBt.play()
    inicarOuPausarBt.textContent = 'Pausar'
    ImageInicarPausar.setAttribute('src','/imagens/pause.png' )
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    ImageInicarPlay.setAttribute('src','/imagens/play_arrow.png' )
    inicarOuPausarBt.textContent = 'Começar'
    intervaloId = null
}

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
    console.log(tempo)
}

mostrarTempo()