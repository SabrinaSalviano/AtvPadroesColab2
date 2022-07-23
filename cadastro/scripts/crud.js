document.querySelector('#modal-cadastrados').addEventListener('click', function (e) {
    listar();
})


function Adicionar() {
    let usuario = {
        nome: document.querySelector('#txtNome').value,
        email: document.querySelector('#txtEmail').value
    }

    if (document.querySelector('#txtEmail').value == '' || document.querySelector('#txtNome').value == '') {
        alert('Preencha os campos')
    }
    else {
        usuarios.push(usuario);
        resultSorteio.push(usuario.nome);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        openModal('cadastro-modal')
        return true;
    }
}

function handleEditar(e) {
    operacao = "E";
    indice_selecionado = parseInt(e.getAttribute("alt"));

    let user = usuarios[indice_selecionado];

    document.querySelector("#txtNome").value = user.nome;
    document.querySelector("#txtEmail").value = user.email;

    let modal = document.getElementById('cadastrados-modal');
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'none';

}

function Editar() {
    //let users = JSON.parse(localStorage.getItem('usuarios'));

    const userAtualizado = {
        nome: document.querySelector("#txtNome").value,
        email: document.querySelector("#txtEmail").value
    }

    usuarios[indice_selecionado] = userAtualizado;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario atualizado');

    operacao = 'A';
    cleanText();
}

function handleDeletar(e) {
    let indice_selecionado = parseInt(e.getAttribute("alt"));
    deletar(indice_selecionado);
    listar();
}

function deletar(indice) {
    usuarios.splice(indice, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function listar() {
    let tbody = document.querySelector('#tblListar tbody');
    let linhas = '';
    let users = JSON.parse(localStorage.getItem('usuarios'));

    for (let i in users) {
        let user = users[i];
        linhas += `<tr>
                <td class="icons">
                    <img class="img-m" src='../imagens/editar.png' alt ='${i}' onclick='handleEditar(this)'/>
                    <img class="img-m" src='../imagens/deletar.png' alt ='${i}' onclick='handleDeletar(this)'/>
                </td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
              </tr>`

    }
    tbody.innerHTML = linhas;
}