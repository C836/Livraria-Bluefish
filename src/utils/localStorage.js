import encrypt from "./encript"

export default function storage(data, method){
    switch(method){
        case 'setLogin':
        localStorage.setItem("usuario", 
        JSON.stringify({
            id: encrypt(String(data.id), "encrypt"),
            nome: data.nome
        }))
    }
}

export function getId(){
    return JSON.parse(localStorage.getItem("usuario")).id
}

export function getUser(){
    return JSON.parse(localStorage.getItem("usuario")).nome
}


