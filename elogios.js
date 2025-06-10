let DivElogios = document.getElementById("elogios");

class Avaliacao {
    constructor(nome, tempo, estrela, frase){
        this.nome = nome; 
        this.tempo = tempo;
        this.estrela = estrela; 
        this.frase = frase; 
    }

    avaliar() {
        let div = document.createElement('div');
        div.className = "review";

        let DivNome = document.createElement('div');
        DivNome.className = "name";
        DivNome.innerHTML = `${this.nome} <span style="font-weight: normal; color: #888;">· ${this.tempo}</span>`;

        let DivEstrela = document.createElement('div');
        DivEstrela.className = "stars";
        DivEstrela.innerHTML = this.estrela;

        let PFrase = document.createElement('p');
        PFrase.innerHTML = this.frase;

        div.appendChild(DivNome);
        div.appendChild(DivEstrela);
        div.appendChild(PFrase);
        DivElogios.appendChild(div);
    }
}

let av1 = new Avaliacao(
    "Alexie Moraes Oliveira",
    "6 anos atrás",
    "★★★★★",
    "Bastante atencioso, excelente profissional, prestativo e amigável. Eu indico e aconselho a todos que estejam passando por momentos difíceis."
);

let av2 = new Avaliacao(
    "Luiza Reis",
    "3 Mês",
    "★★★★★",
    "Profissonal exemplar,humano,amigo,dedicado, aos seus pacientes e que cada sessão colabora pro meu crescimento pessoal."
)


let av3 = new Avaliacao(
    "Ana Lucia",
    "3 Mês",
    "★★★★★",
    "Excelente profissional. Satisfeita com o atendimento."
)

let av4 = new Avaliacao(
    "Rosângela Oliveira Lopes",
    "6 Mês",
    "★★★★★",
    "Super recomendo. Atencioso, prestativo, ótimo profissional."
)

let av5 = new Avaliacao(
    "Thiago Silva",
    "1 Mês",
    "★★★★★",
    "Excelente psicólogo. Recomendo 100%. Obrigado por me ajudar."
)

av1.avaliar();
av2.avaliar();
av3.avaliar();
av4.avaliar();


