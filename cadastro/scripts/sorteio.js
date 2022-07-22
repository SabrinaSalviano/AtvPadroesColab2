let operacao = 'A';
var usuarios=JSON.parse(localStorage.getItem('usuarios'));
let resultSorteio = [];

function numpar(e) {
    if (e % 2 == 0) {

        return true;

    } else {
        return false;
    }
}
let indice_selecionado = -1;
const frmCadastro = document.getElementById('frmCadastro');

function sorteio() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let max = usuarios.length
    let sbody = document.querySelector('.modal-body-resultado');
    let slinhas = '';
    if (max <= 3) {
        alert("É necessário adicionar pelo menos 4 pessoas")
        return;
    }
    else if (max % 2 != 0) {
        alert("O numero de candidatos deve ser par")
        return;
    }
    let resultado = [];
    let num = 0;
    for (let i = 0; i < usuarios.length; i++) {
        num = Math.floor((Math.random() * max) + 0);
        if (resultado.includes(num)) {
            i--;
        }
        else {
            resultado.push(num);

        }
    }
    for (let i = 0; i < resultado.length; i++) {
        if (numpar(i)) {
            slinhas += `<p> ${resultSorteio[resultado[i]]} - ${resultSorteio[resultado[i + 1]]}`
        }
    }
    sbody.innerHTML += slinhas;
    openModal('resultado-modal')
    resultSorteio = [];
}

document.querySelector('#btnSortear').addEventListener('click', function (e) {
    sorteio()
})

window.onload = function setarLocalStorage(){
    var usuarios = [];
    if(localStorage.getItem('usuarios') == null){
        localStorage.setItem('usuarios',JSON.stringify(usuarios))
    }
}
