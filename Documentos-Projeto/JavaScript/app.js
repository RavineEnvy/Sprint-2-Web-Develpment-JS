let listaCadastrados = [];
let listaSenhas = [];


function textoTela(id, texto){
    let campo = document.getElementById(id);
    campo.textContent = texto;
}

function clicarBotao(variavel, id, texto){
    variavel.addEventListener("click", () => {
        textoTela(id, texto);
    });
}

const botaoLogin = document.getElementById("btn-login");
const botaoCadastro = document.getElementById("btn-cadastro");
const botaoConfirmar = document.getElementById("btn-confirmar");
const botaoConfirmarCadastro = document.getElementById("btn-confirmar-Cadastro")
const formularioLogin = document.getElementById("form-login");
const formularioCadastro = document.getElementById("form-cadastro")

clicarBotao(botaoCadastro, "sub-titulo", "Cadastro");

const clicarLogin = botaoLogin.addEventListener("click", () =>{
    textoTela("h1", "FilmaAI");
    textoTela("sub-titulo", "Faça seu Login:")
    botaoLogin.style.display = "none";
    botaoCadastro.style.display = "block";
    formularioLogin.style.display = "block";
    formularioCadastro.style.display ="none"
})

const clicarCadastro = botaoCadastro.addEventListener("click", () =>{
    textoTela("sub-titulo", "Faça seu Cadastro:")
    botaoCadastro.style.display = "none";
    botaoLogin.style.display = "block";
    formularioCadastro.style.display = "block";
    formularioLogin.style.display = "none";
})

const confirmarLogin = botaoConfirmar.addEventListener("click", () => {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let i = 0;
    let loginSucesso = false; 

    while (i < listaCadastrados.length) {
        if (usuario === listaCadastrados[i] && senha === listaSenhas[i]) {
            loginSucesso = true;
            break;
        }
        i++;
    }

    if (loginSucesso) {
        alert(`Bem vindo, ${usuario}!`);
        textoTela("h1", `Bem vindo, ${usuario}!`);
        textoTela("sub-titulo", "Login realizado com Sucesso!");
    
        botaoLogin.style.display = "none";
        botaoCadastro.style.display = "none";
        formularioLogin.style.display = "none";
        console.log("Login correto!");
    } else {
        alert("Senha ou Login incorretos! Tente Novamente!");
    }
});

const confirmarCadastro = botaoConfirmarCadastro.addEventListener("click", ()=>{
    let addUsuario = document.getElementById("addUsuario").value;
    let addSenha = document.getElementById("addSenha").value;
    console.log(addUsuario);

    if(addSenha == ""){
        alert("Preencha com uma senha!");
        return;
    }else if(addUsuario == ""){
        alert("Escolha um login!")
    }else{
        textoTela("h1", `Bem vindo, ${addUsuario}!`);
        textoTela("sub-titulo", "Cadastro realizado com sucesso!");
        formularioCadastro.style.display = "none";
        listaCadastrados.push(addUsuario);
        listaSenhas.push(addSenha);
        console.log(listaCadastrados);
        console.log(listaSenhas)
        return;
    }
})

