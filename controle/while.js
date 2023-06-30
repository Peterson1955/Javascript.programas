function getInterioAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ 
    opcao = getInterioAleatorioEntre(-1, 10)
    console.log(`Opçao escolhido foi ${opcao}.`)

}
console.log("Até a próxima!")
