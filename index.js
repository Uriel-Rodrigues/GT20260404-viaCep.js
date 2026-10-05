function buscarEndereco (cep) {
    if (validaCep(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(Response => Response.json())
        .then(json => {
            if (json.erro){
                let resposta = document.querySelector("#respsta")
                return;
            }
            
            let logradouro =  document.querySelector("#logradouro")
            let bairro =  document.querySelector("#bairro")
            let localidade =  document.querySelector("#localidade")
            let estado =  document.querySelector("#estado")

            logradouro.value = json.logradouro
            bairro.value = json.bairro
            localidade.value = json.localidade
            estado.value = json.estado
        })
        .catch(error => alert("CEP inválido"))
    }
}
 /**
  * função verifica o cep e retorna um boleano, ja conta se possui 8 digitos e se possui letras
  * @param {String} cep 
  * @returns 
  */
function validaCep(cep){
    let regex = /^\d{8}/;
    return regex.test(cep);
}