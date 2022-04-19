const Livro = function (nome, editora, paginas) { //Estou criando um objeto da forma antiga, sem classe.
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function () {
        return gNome;
    }

    this.getEditora = function () {
        return gEditora;
    }

    this.getPaginas = function () {
        return gPaginas;
    }
}

const novoLivro = new Livro("Oliver e as maças", "Montreal", 256);

console.log(novoLivro.getNome());
console.log(novoLivro.getEditora());
console.log(novoLivro.getPaginas());

///////////////////////////////

class Book {
    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log('Titulo: ${this.nome}');
    }

    descreverTitulo() {
        console.log('${this.nome} é um livro da editora ${this.editora} e tem {this.pagina} páginas');
    }
}

const nodeJS = new Book("Menino maluquinho", "JNN", 235);

nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

console.log(typeof Book);

//////////////////////// herança em JS
class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome);  //Usando apenas o atributo da classe principal
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log('O livro ${this.nome} pertence a coleção ${this.nomeColecao}');
    }
}