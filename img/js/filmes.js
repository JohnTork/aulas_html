const btnMode = documents.getElementById('btn-mode');
const conteudo = document.getElementById('conteudo');
const darkModeEstaAtivo = false;

btnMode.onclick = function () {
    if (darkModeEstaAtivo === true) {
        conteudo.style.backgroundColor = '#0e0e0eff';
        conteudo.style.color = '#d8d8d8'
    } else {
        conteudo.style.backgroundColor = 'antiquewhite';
        conteudo.style.color = 'blue'
    }
};