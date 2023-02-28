class Pokemon {
    constructor(nome, tipo, atack) {
    this.nome = nome;
    this.tipo = tipo;
    this.atack = atack;
    }
}

class Eletrico extends Pokemon {
    constructor(nome, tipo, atack) {
    super(nome, tipo, atack);
    this.tipo = "Eletrico";
    this.atack = "Choque do trovão"
    
    }
    eletricoAtaca() {
        console.log(`${this.nome} atacou com ${this.atack}`);
    }
}

class Fogo extends Pokemon {
    constructor(nome, tipo, atack) {
    super(nome, tipo, atack);
    this.tipo = "Fogo"
    this.atack = "Lança chamas"
    }
    fogoAtaca() {
        console.log(`${this.nome} atacou com ${this.atack}`);
    }
    
}

const charizard = new Fogo("Charizard");
const pikachu = new Eletrico("Pikachu");
const cyndaquil = new Fogo("Cyndaquil");

console.log(pikachu)
console.log(charizard)
console.log(cyndaquil)

cyndaquil.fogoAtaca()
pikachu.eletricoAtaca()