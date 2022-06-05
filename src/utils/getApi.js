export default async function getApi(id){
    const url = id===-1||id===undefined ? "https://livraria-apistore.herokuapp.com/livros" : "https://livraria-apistore.herokuapp.com/livros/id/" + id

    return fetch(url)
    .then((res) => res.json())
    .then((res) => {return res})
}