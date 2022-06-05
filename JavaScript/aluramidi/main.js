
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = (event) => {
       if (event.code === 'Space' || event.code === 'Enter'){
           tecla.classList.add('ativa')
       }
    }
    tecla.onkeyup = () => {
       tecla.classList.remove('ativa')
    }
}