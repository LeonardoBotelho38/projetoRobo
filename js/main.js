
const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//identificador de click no controle de peças
controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
        
    })
})

//função para somar ou subtrair valor de peças
function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')

    if (operacao === '+'){
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}

//função para auteral estatistica do robotron a partir do valor das peças
function atualizaEstatisticas(peca){
   
    estatisticas.forEach((elemento) =>{
        
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

let img = document.querySelector('#robotron')

let imagens = document.querySelectorAll('div.imagensRobo >img')

let contador = 0

//identificador de click na imagem do robotron
document.querySelector('#robotron').addEventListener('click', trocaImagem)

//função que troca imagem do robotron
function trocaImagem(){
    if(contador<imagens.length)
    var itemAtual = imagens[contador]

    img.src = itemAtual.src

   contador++
   
   zeraContador()
}
//função para voltar as imagens do robotron quando chegar na ultima
function zeraContador(){
    if (contador >=6){
        contador = 0
    }
}


