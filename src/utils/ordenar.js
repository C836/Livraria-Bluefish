export default function ordenar(titulo, id, preco, method){
    switch(method){
        case 'az': 
        return (a, b) => a[titulo] > b[titulo] ? 1 : b[titulo] > a[titulo] ? -1 : 0;

        case 'za':
        return (a, b) => a[titulo] < b[titulo] ? 1 : b[titulo] < a[titulo] ? -1 : 0;

        case 'less':
        return (a, b) => a[preco] > b[preco] ? 1 : b[preco] > a[preco] ? -1 : 0;

        case 'more':
        return (a, b) => a[preco] < b[preco] ? 1 : b[preco] < a[preco] ? -1 : 0;
    }


    

    //a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0;
}