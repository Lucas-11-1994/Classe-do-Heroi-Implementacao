class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idada = idade;
        this.tipo = tipo.toLowerCase(); // Normaliza para evitar erros de digitação
    }

    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        // Exibe a mensagem final conforme o requisito
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso (Testes)
const heroi1 = new Heroi("Gandalf", 2000, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Lee", 30, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar(); // o mago atacou usando magia
heroi2.atacar(); // o guerreiro atacou usando espada
heroi3.atacar(); // o monge atacou usando artes marciais
heroi4.atacar(); // o ninja atacou usando shuriken