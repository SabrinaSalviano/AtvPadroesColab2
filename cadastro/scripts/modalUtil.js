function openModal(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    mailValidation.innerText = '';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'none';
}

function reset() {
    let sbody = document.querySelector('.modal-body-resultado');
    sbody.innerHTML = ``;
    localStorage.clear();
    closeModal('resultado-modal');
    closeModal('cadastrados-modal');
    resultSorteio = [];
    let tbody = document.querySelector('#tblListar tbody');
    tbody.innerHTML = ``;
    usuarios = [];
}