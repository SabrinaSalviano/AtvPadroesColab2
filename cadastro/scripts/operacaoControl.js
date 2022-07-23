let operacao = 'A';

function Cadastrar() {
    if (operacao == 'A') {
        return Adicionar();
    }
    else {
        return Editar();
    }
}   