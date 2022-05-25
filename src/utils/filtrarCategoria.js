export default function(livro, selecionada){
    return livro.genero.toLowerCase().replace(/[^\w\s]/gi, '').indexOf(selecionada)>-1
}