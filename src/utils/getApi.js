export default async function getApi(){
    return fetch("https://livraria-apirest.herokuapp.com/livros")
    .then((res) => res.json())
    .then((res) => {return res});
}