export default function ordenar(titulo, id, preco, method){
    const redo = (p) =>{
        return p.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
    }

    const num = (p) =>{
        return Number(p.replace(',',''))
    }

    switch(method){
        case 'new':
        return (a, b) => Number(a[id]) < Number(b[id]) ? 1 : -1

        case 'old':
        return (a, b) => Number(a[id]) > Number(b[id]) ? 1 : -1

        case 'az': 
        return (a, b) => redo(a[titulo]) > redo(b[titulo]) ? 1 : redo(b[titulo]) > redo(a[titulo]) ? -1 : 0;

        case 'za':
        return (a, b) => redo(a[titulo]) < redo(b[titulo]) ? 1 : redo(b[titulo]) < redo(a[titulo]) ? -1 : 0;

        case 'less':
        return (a, b) => num(a[preco]) > num(b[preco]) ? 1 : -1;

        case 'more':
        return (a, b) => num(a[preco]) < num(b[preco]) ? 1 : -1;
    }


    

    //a.titulo > b.titulo ? 1 : b.titulo > a.titulo ? -1 : 0;
}