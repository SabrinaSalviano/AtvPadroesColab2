function validaUsuarios(max) {
    if (max <= 3) {
        alert("É necessario adicionar pelo menos 4 pessoas") 
        return false;
    }
    else if (max % 2 != 0) {
        alert("O numero de candidatos deve ser par")
        return false;
    }
    else {
        return true;
    }
}