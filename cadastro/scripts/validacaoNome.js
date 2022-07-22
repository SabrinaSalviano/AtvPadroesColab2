let nome = document.getElementById('txtNome');
let nameValidation = document.getElementById('name-validation');

nome.onkeyup = function () {
    var nameVal = true;
    if (nome.value.length < 3) {
        nameValidation.innerText = 'Por favor, preencha o campo nome';
        nome.style.border = '';
    }
    else {
        nameValidation.innerText = '';
        nameVal = false;
    }
}
