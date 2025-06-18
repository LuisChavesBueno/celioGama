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
