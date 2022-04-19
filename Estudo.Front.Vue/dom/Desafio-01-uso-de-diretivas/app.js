new Vue({
    el:'#desafio', //essa instância do vue passa a controlar o trecho de HTML com esse elemento
    data:{
        titulo: 'Usando VueJs 2',
        nome: 'Paulo Ricardo',
        idade: 25,
        link: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/situacao-muito-estranha.jpg?w=563&ssl=1',
    },
    methods:{
       multiplicaportres: function(value){
        return value *3
       },
       numeroRandomico: function(){
        return Math.random()
       }
    }
})