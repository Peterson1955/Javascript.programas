// par nome valor
const saudacao = "Opa" // contexto léxico 1 

function exec() {
    const saudacao = "Falaaa" // contesto funcao 
    return saudacao 

}

// objetos sao grupos alinhados de pares nome/valro 
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
        
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)
