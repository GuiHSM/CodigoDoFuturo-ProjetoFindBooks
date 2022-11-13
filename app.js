const livros = require("./database");
const categorias = require("./categorias");
const readline = require("readline-sync");

const listaAll = () =>{
    console.table(livros.sort((a,b)=>a.paginas-b.paginas));
}

const findBook = () =>{
    console.log('Essas são as categorias disponíveis:');
    let texto="";
    categorias.forEach(categoria => {
        texto+=(`/${categoria}`);
    });
    console.log(texto);
    const entradaCategoria = readline.question("Qual categoria tu escolhe?");
    console.log(livros);
    const retorno = livros.filter(livro => livro.categoria.includes(entradaCategoria.toLocaleUpperCase()));
    console.table(retorno);
}

const entrada = readline.question("Gostaria de encontrar um livro?(S/N)\n");
entrada.toLocaleUpperCase() === "S"? findBook(): listaAll();