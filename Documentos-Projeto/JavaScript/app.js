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
    let senha = document.getElementById("senha");

    if(listaCadastrados.includes(usuario.value) && listaSenhas.includes(senha.value)){
        alert(`Bem vindo, ${usuario.value}!`);
        textoTela("sub-titulo", "Login realizado com sucesso!");
        botaoLogin.style.display = "none";
        botaoCadastro.style.display = "none";
        formularioLogin.style.display = "none";
        return;
    }else{
        alert("Senha ou Login incorretos! Tente Novamente!");
        return;
    }
})

const confirmarCadastro = botaoConfirmarCadastro.addEventListener("click", ()=>{
    let AddUsuario = document.getElementById("addUsuario")
    let AddSenha = document.getElementById("addSenha")
    console.log(addUsuario.value);

    if(AddSenha.value == ""){
        alert("Preencha com uma senha!");
        return;
    }else if(addUsuario.value == ""){
        alert("Escolha um login!")
    }else{
        textoTela("h1", `Bem vindo, ${AddUsuario.value}!`);
        textoTela("sub-titulo", "Cadastro realizado com sucesso!");
        formularioCadastro.style.display = "none";
        listaCadastrados.push(AddUsuario.value);
        listaSenhas.push(AddSenha.value);
        console.log(listaCadastrados);
        console.log(listaSenhas)
        return;
    }
})

