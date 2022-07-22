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
