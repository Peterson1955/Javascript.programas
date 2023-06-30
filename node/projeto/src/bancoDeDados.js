const sequence = {
    _id: 1,
    get id() { return this.id++}
    
}

const produtos = {}

function salvarProdutos(produto) {
    if (!produto.id) produto.id =sequence.id
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProdutos, getProduto, getProdutos}
