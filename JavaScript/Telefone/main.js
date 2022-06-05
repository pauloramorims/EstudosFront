const tela = document.querySelector('.tela')
const listaDeTeclas = document.querySelectorAll('.tecla');
const teclado = document.querySelector('.teclado')

function escreveNaTela(valor){
    if(valor === 'Backspace' || valor === 'Delete'){
        tela.value = tela.value.slice(0, - 1)
    } else{
        tela.value += valor
    }
}

for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index]
    tecla.addEventListener('click', ()=> {
        escreveNaTela(listaDeTeclas[index].value)
    })

}

teclado.onkeydown = (e) => {
    const teclasPermitidas = [/Backspace/, /Digit/, /Numpad/, /Delete/]

    const testeRegex = teclasPermitidas.map(teclaPermitida => {
        return e.code.match(teclaPermitida)
    })
    
    for (let index = 0; index < testeRegex.length; index++) {
        if(testeRegex[index] !== null) {
            escreveNaTela(e.key)
            break
        }
    }
}
