export default function login(data, senha, callback) {
  if (data[0].senha === senha) {
    callback({id: data[0].id, nome: data[0].nome})
  }
}
