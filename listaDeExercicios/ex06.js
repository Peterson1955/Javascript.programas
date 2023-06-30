function inverso(valor) {
    const tipo = typeof valor
    if(tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
        return 'booleano ou número esperados, mas p parâmetro é do tipo string' 
}

console.log(inverso("programação"))