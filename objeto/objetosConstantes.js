// pessoa -> 123 -> {....}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {....}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)


// criando um objeto que nao pode ser alterado 

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)
