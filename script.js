const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const botaoEntrar = document.querySelector("button");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); 

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "teste@exemplo.com" && senha === "abc123") {
        mensagem.textContent = "Dados corretos!";
        
        botaoEntrar.textContent = "Carregando...";
        botaoEntrar.disabled = true;
        botaoEntrar.style.opacity = "0.7";

        setTimeout(() => {
            window.location.href = "https://youtube.com";
        }, 2000);

    } else {
        mensagem.textContent = "Dados de teste incorretos.";
    }
});
