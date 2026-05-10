function textoTela(id,texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

textoTela("h1", "FilmaAI")