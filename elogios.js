let checkbox = document.getElementById("concorda-termos"); 
let botaoReceberEmail = document.getElementById("botao-email")
let MessagensAviso = document.getElementById("messagens-aviso");
let email = document.getElementById("email");

botaoReceberEmail.addEventListener('click', () => {
    if (checkbox.checked) {
        if(email.value == ""){
            MessagensAviso.innerHTML = "Por favor, preencha o campo.";
            MessagensAviso.style.display = "block";
            
            setInterval(() => {
                MessagensAviso.style.display = "none";
                MessagensAviso.innerHTML = "";
            }, 4000)
        }
    } else {
        MessagensAviso.innerHTML = "Você tem que concorda logo em cima";
        MessagensAviso.style.display = "block";
        setInterval(() => {
            MessagensAviso.style.display = "none";
            MessagensAviso.innerHTML = "";
        }, 5000)
    }
});



//ELOGIOS
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
    "2 dias atrás",
    "★★★★★",
    "Bastante atencioso, excelente profissional, prestativo e amigável. Eu indico e aconselho a todos que estejam passando por momentos difíceis."
);

let av2 = new Avaliacao(
    "Luiza Reis",
    "2 dias",
    "★★★★★",
    "Profissonal exemplar,humano,amigo,dedicado, aos seus pacientes e que cada sessão colabora pro meu crescimento pessoal."
)


let av3 = new Avaliacao(
    "Ana Lucia",
    "1 semana",
    "★★★★★",
    "Excelente profissional. Satisfeita com o atendimento."
)

let av4 = new Avaliacao(
    "Rosângela Oliveira Lopes",
    "1 semana",
    "★★★★★",
    "Super recomendo. Atencioso, prestativo, ótimo profissional."
)

let av5 = new Avaliacao(
    "Thiago Silva",
    "2 semana",
    "★★★★★",
    "Excelente psicólogo. Recomendo 100%. Obrigado por me ajudar."
)

av1.avaliar();
av2.avaliar();
av3.avaliar();
av4.avaliar();


