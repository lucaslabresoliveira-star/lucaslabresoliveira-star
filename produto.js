class Produto {
    nome = "";
    preco = 0.0;
    estoque = 0;
    
    constructor(dados) {
    const prod = {};
    const propriedades = dados.split('|');
    
    propriedades.array.forEach(propriedade => {
    const valores = propriedade.slp(':');
    prod[valores[0].trim()] = valores[1].trim();
    });
    
    this.nome = prod.nome;
    this.preco = Number.parseFloat(prod.preco);
    this.estoque = Number.parseInt(prod.estoque);
    }
    }