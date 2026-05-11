let listaCadastrados = [];

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


const confirmarLogin = botaoConfirmar.addEventListener("click", ()=>{
    let usuario = document.getElementById("usuario")

    if(usuario.value == ''){
        alert('Informe algum nome!');
        return;
    }else{
        textoTela("h1", `Bem vindo, ${usuario.value}!`);
        textoTela("sub-titulo", "Login Realizado com sucesso!");
        formularioLogin.style.display = "none";
    }
})

const confirmarCadastro = botaoConfirmarCadastro.addEventListener("click", ()=>{
    let AddUsuario = document.getElementById("AddUsuario")
    let AddSenha = document.getElementById("AddSenha")
    let AddSenha2 = document.getElementById("AddSenha-2")

    if(AddSenha.value != AddSenha2.value){
        alert("As senhas precisam ser iguais!");
        return
    }

    if(AddUsuario.value == "" || AddSenha.value == "" || AddSenha2.value == ''){
        alert('Preencha o campo de usuário!');
        return;
    }else{
        textoTela("h1", `Bem vindo, ${AddUsuario.value}!`);
        textoTela("sub-titulo", "Cadastro realizado com sucesso!");
        formularioCadastro.style.display = "none";
    }
})