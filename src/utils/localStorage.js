import { EncryptStorage } from 'encrypt-storage';

export default function storage(data, method){
    console.log(data)
    switch(method){
        case 'setLogin':
        localStorage.setItem("usuario", 
        JSON.stringify({
            "id": data.id,
            "nome": data.nome
        }))
    }
}