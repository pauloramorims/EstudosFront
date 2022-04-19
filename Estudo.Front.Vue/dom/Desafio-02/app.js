new Vue({
    el: '#desafio',
    data: {
        valor: 'teste'
    },
    methods: {
        exibirAlerta(event){
            alert("Estou te alertado fulaninho")
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    },
})