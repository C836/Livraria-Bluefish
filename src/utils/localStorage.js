import encrypt from "./encript"

export default function storage(data, method){
    console.log(data)
    switch(method){
        case 'setLogin':
        localStorage.setItem("usuario", 
        JSON.stringify({
            id: encrypt(String(data.id), "encrypt"),
            nome: data.nome
        }))
    }
}