class heroi{
    constructor(nome, idade, tipo){
    this.nome =  nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}`)
    }

    ataque(){
        if (this.tipo == "mago"){
            this.tipo = "magia"
        } else if (this.tipo == "guerreiro"){
            this.tipo = "espada"
        } else if (this.tipo == "monge"){
            this.tipo = "artes marciais"
        } else {
            this.tipo = "shuriken"
        }
        return this.tipo
    }
}

let classeMago = new heroi("Flávio","18","mago")
let classeGuerreiro = new heroi("Felipe","18","guerreiro")
let classeMonge = new heroi("Renata","31","monge")
let classeNinja = new heroi("Vanessa","20","ninja")

classeMago.atacar()
classeGuerreiro.atacar()
classeMonge.atacar()
classeNinja.atacar()