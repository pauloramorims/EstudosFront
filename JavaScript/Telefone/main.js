const tela = document.querySelector('.tela')
const listaDeTeclas = document.querySelectorAll('.tecla');

function escreveNaTela(valor){
    console.log(valor)
    tela.value += valor
}

for (let index = 0; index < listaDeTeclas.length; index++) {
    listaDeTeclas[index].addEventListener('click', ()=> {
        escreveNaTela(listaDeTeclas[index].value)
    })
}
