function addUsuario(){
    let usuario = document.getElementById("usuario");
    console.log(usuario.value)
}

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
const formulario = document.getElementById("form-login");

clicarBotao(botaoLogin, "sub-titulo", "Login");
clicarBotao(botaoCadastro, "sub-titulo", "Cadastro");

const confirmarBotao = botaoConfirmar.addEventListener("click", ()=>{
    if(usuario.value == ''){
        alert('Informe algum nome!');
        return;
    }else{
        addUsuario()
        textoTela("h1", `Bem vindo, ${usuario.value}!`);
        textoTela("sub-titulo", "Cadastro Realizado com sucesso!");
    }
})