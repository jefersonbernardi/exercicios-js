function criarElemento(tagElemen, className) {
    const elem = document.createElement(tagElemen)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = criarElemento('div', 'barreira')

    const borda = criarElemento('div', 'borda')
    const corpo = criarElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = criarElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAltura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = attrib => this.elemento.style.left = `${attrib}px`
    this.getwidth = () => this.elemento.clientWidth

    this.sortearAltura()

    this.setX(x)
}

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    const deslocador = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocador)
            if (par.getX() < -par.getwidth()) {
                par.setX(par.getX() + (espaco * this.pares.length))
                par.sortearAltura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocador >= meio && par.getX() < meio
            cruzouOMeio && notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `s${y}px`

    window.onkeydown = e => voando = true
    windows.onkeydup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)

        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo /2)
}


const barreiras = new Barreiras(500, 1150, 150, 400)
const passaro = new Passaro(500)
const areaDoJogo = document.querySelector('[wm-flappy]')

areaDoJogo.appendChild(passaro.elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20);