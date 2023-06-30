function receberNomeDoMes(numero) {
    const mapeamento = [ 'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto',
     'setembro', 'outubro', 'novembro', 'dezembro' ]

  return mapeamento [--numero];

}

console.log(receberNomeDoMes(11))